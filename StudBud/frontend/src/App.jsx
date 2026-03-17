import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

const apiBase = '/api';

function getCookie(name) {
  const cookie = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${name}=`));
  return cookie ? decodeURIComponent(cookie.split('=').slice(1).join('=')) : '';
}

async function apiRequest(path, options = {}) {
  const method = options.method || 'GET';
  const headers = new Headers(options.headers || {});
  const config = {
    method,
    credentials: 'same-origin',
    headers,
  };

  if (method !== 'GET') {
    headers.set('X-CSRFToken', getCookie('csrftoken'));
  }

  if (options.body instanceof FormData) {
    config.body = options.body;
  } else if (options.body) {
    headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    config.body = new URLSearchParams(options.body);
  }

  const response = await fetch(`${apiBase}${path}`, config);
  const data = await response.json().catch(() => ({
    ok: false,
    message: 'Unexpected server response.',
  }));

  if (!response.ok || data.ok === false) {
    const error = new Error(data.message || 'Request failed.');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

function useAsyncData(loader, dependencies) {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: '',
  });

  useEffect(() => {
    let active = true;
    setState({ loading: true, data: null, error: '' });

    loader()
      .then((data) => {
        if (active) {
          setState({ loading: false, data, error: '' });
        }
      })
      .catch((error) => {
        if (active) {
          setState({
            loading: false,
            data: null,
            error: error.data?.message || error.message,
          });
        }
      });

    return () => {
      active = false;
    };
  }, dependencies);

  return state;
}

function timeAgo(value) {
  const date = new Date(value);
  const seconds = Math.round((date.getTime() - Date.now()) / 1000);
  const ranges = [
    ['year', 31536000],
    ['month', 2592000],
    ['week', 604800],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
  ];

  if (typeof Intl === 'undefined' || typeof Intl.RelativeTimeFormat !== 'function') {
    for (const [unit, amount] of ranges) {
      if (Math.abs(seconds) >= amount || unit === 'minute') {
        const count = Math.round(Math.abs(seconds) / amount);
        const suffix = count === 1 ? unit : `${unit}s`;
        return seconds < 0 ? `${count} ${suffix} ago` : `in ${count} ${suffix}`;
      }
    }
    return 'just now';
  }

  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  for (const [unit, amount] of ranges) {
    if (Math.abs(seconds) >= amount || unit === 'minute') {
      return formatter.format(Math.round(seconds / amount), unit);
    }
  }
  return 'just now';
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}

function toErrorList(errors) {
  if (!errors) {
    return [];
  }

  return Object.entries(errors).flatMap(([field, messages]) =>
    messages.map((message) => `${field}: ${message}`),
  );
}

function Avatar({ user, size = 'md' }) {
  return (
    <img
      className={`avatar avatar--${size}`}
      src={user?.avatarUrl}
      alt={user?.name || user?.username || 'User avatar'}
    />
  );
}

function ReactiveBackdrop() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const update = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty('--pointer-x', `${x}%`);
        root.style.setProperty('--pointer-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', update);
    };
  }, []);

  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__mesh" />
      <div className="backdrop__orb backdrop__orb--primary" />
      <div className="backdrop__orb backdrop__orb--secondary" />
      <div className="backdrop__orb backdrop__orb--tertiary" />
      <div className="backdrop__grid" />
    </div>
  );
}

function StatCard({ label, value, note }) {
  return (
    <div className="stat-card">
      <span className="eyebrow">{label}</span>
      <strong>{value}</strong>
      <p>{note}</p>
    </div>
  );
}

function LoadingState({ label = 'Loading the experience...' }) {
  return <div className="surface surface--muted">{label}</div>;
}

function ErrorState({ title = 'Something went sideways.', message }) {
  return (
    <div className="surface surface--danger">
      <strong>{title}</strong>
      <p>{message}</p>
    </div>
  );
}

function EmptyState({ title, body, action }) {
  return (
    <div className="empty-state">
      <strong>{title}</strong>
      <p>{body}</p>
      {action}
    </div>
  );
}

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error?.message || 'The interface failed to load.',
    };
  }

  componentDidCatch(error) {
    console.error('StudBud frontend error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="page-shell">
          <div className="surface surface--danger">
            <strong>The frontend hit a rendering error.</strong>
            <p>{this.state.message}</p>
            <p>Refresh the page once. If it still happens, the latest patch should make the fallback visible instead of a blank screen.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function TopBar({ currentUser, onLogout, sessionLoading }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearch(params.get('q') || '');
  }, [location.search]);

  const handleSearch = (event) => {
    event.preventDefault();
    const params = search ? `?q=${encodeURIComponent(search)}` : '';
    navigate(`/${params}`);
  };

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <Link to="/" className="brand">
          <span className="brand__mark">SB</span>
          <span>
            <strong>StudBud</strong>
            <small>conversation spaces with real atmosphere</small>
          </span>
        </Link>

        <form className="topbar__search" onSubmit={handleSearch}>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search rooms, topics, or threads"
          />
        </form>

        <nav className="topbar__actions">
          <Link to="/" className="ghost-link">Explore</Link>
          {currentUser ? (
            <>
              <Link to="/create-room/" className="ghost-link">Create room</Link>
              <Link to={`/profile/${currentUser.id}/`} className="profile-pill">
                <Avatar user={currentUser} size="sm" />
                <span>{currentUser.name}</span>
              </Link>
              <button className="button button--ghost" onClick={onLogout} type="button">
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login/" className="ghost-link">Sign in</Link>
              <Link to="/register/" className="button button--accent">
                {sessionLoading ? '...' : 'Join now'}
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

function Layout({ currentUser, sessionLoading, onLogout, children }) {
  return (
    <div className="app-shell">
      <ReactiveBackdrop />
      <TopBar currentUser={currentUser} onLogout={onLogout} sessionLoading={sessionLoading} />
      <main className="page-shell">{children}</main>
    </div>
  );
}

function HomePage({ currentUser }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { loading, data, error } = useAsyncData(
    () => apiRequest(`/home/${query ? `?q=${encodeURIComponent(query)}` : ''}`),
    [query],
  );

  if (loading) {
    return <LoadingState label="Curating rooms and activity..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  const { rooms, topics, activities, stats } = data;

  return (
    <div className="stack stack--xl">
      <section className="hero">
        <div className="hero__copy">
          <span className="eyebrow">Campus energy, rebuilt</span>
          <h1>Study rooms that feel alive instead of static.</h1>
          <p>
            Browse focused communities, jump into active rooms, and build a profile that
            actually feels personal.
          </p>
          <div className="hero__cta">
            <Link to={currentUser ? '/create-room/' : '/register/'} className="button button--accent">
              {currentUser ? 'Start a new room' : 'Create your account'}
            </Link>
            <button
              type="button"
              className="button button--ghost"
              onClick={() => setSearchParams({ q: 'python' })}
            >
              Try a sample search
            </button>
          </div>
        </div>

        <div className="hero__stats">
          <StatCard label="Live rooms" value={stats.rooms} note="Fresh spaces for focused discussion." />
          <StatCard label="Topics" value={stats.topics} note="Everything from algorithms to design critique." />
          <StatCard label="Messages" value={stats.messages} note="Conversation that keeps moving." />
          <StatCard label="Members" value={stats.members} note="People building momentum together." />
        </div>
      </section>

      <section className="dashboard">
        <aside className="surface surface--panel">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Browse</span>
              <h2>Topics</h2>
            </div>
            {currentUser && <Link to="/create-topic/" className="ghost-link">New topic</Link>}
          </div>
          <div className="topic-list">
            <button
              type="button"
              className={`topic-chip ${query ? '' : 'topic-chip--active'}`}
              onClick={() => setSearchParams({})}
            >
              All streams
            </button>
            {topics.map((topic) => (
              <button
                key={topic.id}
                type="button"
                className={`topic-chip ${query === topic.name ? 'topic-chip--active' : ''}`}
                onClick={() => setSearchParams({ q: topic.name })}
              >
                <span>{topic.name}</span>
                <small>{topic.roomCount}</small>
              </button>
            ))}
          </div>
        </aside>

        <section className="stack">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Rooms</span>
              <h2>{query ? `Results for "${query}"` : 'Latest discussion spaces'}</h2>
            </div>
            <p>{rooms.length} spaces ready to join</p>
          </div>

          {rooms.length ? (
            <div className="room-grid">
              {rooms.map((room) => (
                <Link key={room.id} to={`/room/${room.id}/`} className="room-card">
                  <div className="room-card__meta">
                    <span className="topic-pill">{room.topic?.name || 'General'}</span>
                    <span>{timeAgo(room.updatedAt)}</span>
                  </div>
                  <h3>{room.name}</h3>
                  <p>{room.description || 'A fresh room waiting for the first great thread.'}</p>
                  <div className="room-card__footer">
                    {room.host ? (
                      <div className="inline-user">
                        <Avatar user={room.host} size="sm" />
                        <span>@{room.host.username}</span>
                      </div>
                    ) : (
                      <span>Community hosted</span>
                    )}
                    <strong>{room.messageCount} posts</strong>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No rooms matched that search."
              body="Try a different topic or create a new room to start the conversation."
              action={currentUser ? <Link to="/create-room/" className="button button--accent">Create room</Link> : null}
            />
          )}
        </section>

        <aside className="surface surface--panel">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Activity</span>
              <h2>Recent sparks</h2>
            </div>
          </div>
          <div className="activity-list">
            {activities.length ? (
              activities.map((activity) => (
                <Link key={activity.id} to={`/room/${activity.room.id}/`} className="activity-card">
                  <div className="inline-user">
                    <Avatar user={activity.user} size="sm" />
                    <div>
                      <strong>{activity.user.name}</strong>
                      <small>{timeAgo(activity.updatedAt)}</small>
                    </div>
                  </div>
                  <p>{activity.body}</p>
                  <span className="room-link">in {activity.room.name}</span>
                </Link>
              ))
            ) : (
              <EmptyState title="No activity yet." body="When messages start landing, they will show up here." />
            )}
          </div>
        </aside>
      </section>
    </div>
  );
}

function RoomPage({ currentUser }) {
  const { pk } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useAsyncData(() => apiRequest(`/rooms/${pk}/`), [pk]);
  const [body, setBody] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [actionError, setActionError] = useState('');

  if (loading) {
    return <LoadingState label="Opening the room..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  const { room, messages, participants } = data;

  const refresh = async () => {
    window.location.reload();
  };

  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    setActionError('');
    setSubmitting(true);
    try {
      await apiRequest(`/rooms/${pk}/messages/`, {
        method: 'POST',
        body: { body },
      });
      setBody('');
      await refresh();
    } catch (submitError) {
      setActionError(submitError.data?.message || submitError.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteRoom = async () => {
    if (!window.confirm(`Delete "${room.name}"? This cannot be undone.`)) {
      return;
    }

    try {
      await apiRequest(`/rooms/${pk}/delete/`, { method: 'POST' });
      navigate('/');
    } catch (deleteError) {
      setActionError(deleteError.data?.message || deleteError.message);
    }
  };

  const handleEditMessage = async (message) => {
    const nextBody = window.prompt('Edit your message', message.body);
    if (!nextBody || nextBody === message.body) {
      return;
    }

    try {
      await apiRequest(`/messages/${message.id}/update/`, {
        method: 'POST',
        body: { body: nextBody },
      });
      await refresh();
    } catch (updateError) {
      setActionError(updateError.data?.message || updateError.message);
    }
  };

  const handleDeleteMessage = async (message) => {
    if (!window.confirm('Delete this message?')) {
      return;
    }

    try {
      await apiRequest(`/messages/${message.id}/delete/`, { method: 'POST' });
      await refresh();
    } catch (deleteError) {
      setActionError(deleteError.data?.message || deleteError.message);
    }
  };

  return (
    <div className="room-layout">
      <section className="surface surface--feature stack">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{room.topic?.name || 'General room'}</span>
            <h1>{room.name}</h1>
          </div>
          {room.canEdit ? (
            <div className="inline-actions">
              <Link to={`/update-room/${room.id}/`} className="button button--ghost">Edit room</Link>
              <button type="button" className="button button--danger" onClick={handleDeleteRoom}>
                Delete
              </button>
            </div>
          ) : null}
        </div>

        <p className="lede">{room.description || 'This room is ready for a smart, focused discussion.'}</p>
        {actionError ? <ErrorState title="Action blocked" message={actionError} /> : null}

        <div className="chat-feed">
          {messages.length ? (
            messages.map((message) => (
              <article key={message.id} className="message-card">
                <div className="message-card__head">
                  <Link to={`/profile/${message.user.id}/`} className="inline-user inline-user--strong">
                    <Avatar user={message.user} size="sm" />
                    <div>
                      <strong>{message.user.name}</strong>
                      <small>@{message.user.username}</small>
                    </div>
                  </Link>
                  <div className="message-card__meta">
                    <span>{timeAgo(message.updatedAt)}</span>
                    {message.canEdit ? (
                      <div className="inline-actions">
                        <button type="button" className="text-link" onClick={() => handleEditMessage(message)}>
                          Edit
                        </button>
                        <button type="button" className="text-link text-link--danger" onClick={() => handleDeleteMessage(message)}>
                          Remove
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
                <p>{message.body}</p>
              </article>
            ))
          ) : (
            <EmptyState title="This room is quiet." body="Be the first one to drop a useful thought." />
          )}
        </div>

        {currentUser ? (
          <form className="stack" onSubmit={handleMessageSubmit}>
            <label className="form-label" htmlFor="message-body">Add to the thread</label>
            <textarea
              id="message-body"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              placeholder="Share an explanation, a resource, or a question."
              rows="4"
            />
            <div className="inline-actions">
              <button className="button button--accent" disabled={submitting} type="submit">
                {submitting ? 'Sending...' : 'Send message'}
              </button>
            </div>
          </form>
        ) : (
          <EmptyState
            title="Want to reply?"
            body="Sign in to join the thread and keep the room moving."
            action={<Link to="/login/" className="button button--accent">Sign in</Link>}
          />
        )}
      </section>

      <aside className="stack">
        <section className="surface surface--panel">
          <div className="section-heading">
            <div>
              <span className="eyebrow">People here</span>
              <h2>{participants.length} participants</h2>
            </div>
          </div>
          <div className="participant-list">
            {participants.length ? (
              participants.map((participant) => (
                <Link key={participant.id} to={`/profile/${participant.id}/`} className="inline-user participant-row">
                  <Avatar user={participant} size="sm" />
                  <div>
                    <strong>{participant.name}</strong>
                    <small>@{participant.username}</small>
                  </div>
                </Link>
              ))
            ) : (
              <p className="muted-copy">No one has joined the participant list yet.</p>
            )}
          </div>
        </section>
      </aside>
    </div>
  );
}

function ProfilePage({ currentUser }) {
  const { pk } = useParams();
  const { loading, data, error } = useAsyncData(() => apiRequest(`/profile/${pk}/`), [pk]);

  if (loading) {
    return <LoadingState label="Loading profile details..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  const { profile, rooms, activities } = data;

  return (
    <div className="stack stack--xl">
      <section className="profile-hero">
        <div className="profile-hero__main">
          <Avatar user={profile} size="xl" />
          <div>
            <span className="eyebrow">Member profile</span>
            <h1>{profile.name}</h1>
            <p className="muted-copy">@{profile.username}</p>
            <p className="lede">{profile.bio || 'Still writing their intro. The best profiles always evolve.'}</p>
          </div>
        </div>
        {profile.isCurrentUser || currentUser?.id === profile.id ? (
          <Link to="/settings/profile/" className="button button--accent">
            Edit profile
          </Link>
        ) : null}
      </section>

      <section className="dashboard dashboard--profile">
        <div className="surface surface--panel stack">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Hosted rooms</span>
              <h2>{rooms.length} spaces</h2>
            </div>
          </div>
          {rooms.length ? (
            <div className="stack">
              {rooms.map((room) => (
                <Link key={room.id} to={`/room/${room.id}/`} className="mini-room">
                  <span className="topic-pill">{room.topic?.name || 'General'}</span>
                  <strong>{room.name}</strong>
                  <p>{room.description || 'No description added yet.'}</p>
                </Link>
              ))}
            </div>
          ) : (
            <EmptyState title="No hosted rooms yet." body="When this user creates a room, it will show up here." />
          )}
        </div>

        <div className="surface surface--panel stack">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Recent activity</span>
              <h2>Latest posts</h2>
            </div>
          </div>
          {activities.length ? (
            <div className="activity-list">
              {activities.map((activity) => (
                <Link key={activity.id} to={`/room/${activity.room.id}/`} className="activity-card">
                  <div className="inline-user">
                    <Avatar user={activity.user} size="sm" />
                    <div>
                      <strong>{activity.room.name}</strong>
                      <small>{timeAgo(activity.updatedAt)}</small>
                    </div>
                  </div>
                  <p>{activity.body}</p>
                </Link>
              ))}
            </div>
          ) : (
            <EmptyState title="No activity yet." body="Fresh contributions will appear here." />
          )}
        </div>
      </section>
    </div>
  );
}

function AuthPage({ mode, setCurrentUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState([]);
  const [preview, setPreview] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    setFieldErrors([]);

    const formData = new FormData(event.currentTarget);

    try {
      const endpoint = mode === 'login' ? '/login/' : '/register/';
      const data = await apiRequest(endpoint, {
        method: 'POST',
        body: formData,
      });
      setCurrentUser(data.currentUser);
      navigate('/');
    } catch (submitError) {
      setError(submitError.data?.message || submitError.message);
      setFieldErrors(toErrorList(submitError.data?.errors));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="auth-grid">
      <div className="surface surface--feature stack">
        <span className="eyebrow">StudBud access</span>
        <h1>{mode === 'login' ? 'Return to the rooms.' : 'Build a profile with presence.'}</h1>
        <p className="lede">
          {mode === 'login'
            ? 'Pick up your conversations, keep your rooms moving, and stay visible.'
            : 'Add a real profile picture, shape your intro, and make your account feel like it belongs here.'}
        </p>
      </div>

      <div className="surface surface--panel stack">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{mode === 'login' ? 'Sign in' : 'Register'}</span>
            <h2>{mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
          </div>
        </div>

        {error ? <ErrorState title="We couldn't submit that form." message={error} /> : null}
        {fieldErrors.length ? (
          <div className="surface surface--muted">
            <strong>Fix these fields:</strong>
            <ul className="plain-list">
              {fieldErrors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <form className="stack" onSubmit={handleSubmit}>
          {mode === 'register' ? (
            <>
              <label className="form-label" htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="How should people know you?" />

              <label className="form-label" htmlFor="avatar">Profile picture</label>
              <div className="upload-row">
                {preview ? <img className="avatar avatar--lg" src={preview} alt="Avatar preview" /> : <div className="avatar avatar--lg avatar--placeholder">+</div>}
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    setPreview(file ? URL.createObjectURL(file) : '');
                  }}
                />
              </div>

              <label className="form-label" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="name@example.com" />

              <label className="form-label" htmlFor="bio">Bio</label>
              <textarea id="bio" name="bio" rows="3" placeholder="What are you studying or building right now?" />
            </>
          ) : null}

          <label className="form-label" htmlFor="username">Username</label>
          <input id="username" name="username" type="text" required placeholder="studybuddy" />

          <label className="form-label" htmlFor="password">{mode === 'login' ? 'Password' : 'Password'}</label>
          <input id="password" name={mode === 'login' ? 'password' : 'password1'} type="password" required placeholder="Enter your password" />

          {mode === 'register' ? (
            <>
              <label className="form-label" htmlFor="password2">Confirm password</label>
              <input id="password2" name="password2" type="password" required placeholder="Confirm your password" />
            </>
          ) : null}

          <button className="button button--accent" disabled={submitting} type="submit">
            {submitting ? 'Submitting...' : mode === 'login' ? 'Sign in' : 'Create account'}
          </button>
        </form>

        <p className="muted-copy">
          {mode === 'login' ? (
            <>Need an account? <Link to="/register/" className="text-link">Register here.</Link></>
          ) : (
            <>Already signed up? <Link to="/login/" className="text-link">Sign in instead.</Link></>
          )}
        </p>
      </div>
    </section>
  );
}

function ProfileSettingsPage({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const { loading, data, error } = useAsyncData(() => apiRequest('/profile/edit/'), []);
  const [formError, setFormError] = useState('');
  const [fieldErrors, setFieldErrors] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [preview, setPreview] = useState('');

  if (!currentUser) {
    return <Navigate to="/login/" replace />;
  }

  if (loading) {
    return <LoadingState label="Preparing your profile editor..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  const profile = data.profile;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setFormError('');
    setFieldErrors([]);

    const formData = new FormData(event.currentTarget);
    try {
      const response = await apiRequest(`/profile/${profile.id}/update/`, {
        method: 'POST',
        body: formData,
      });
      setCurrentUser(response.profile);
      navigate(`/profile/${profile.id}/`);
    } catch (submitError) {
      setFormError(submitError.data?.message || submitError.message);
      setFieldErrors(toErrorList(submitError.data?.errors));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="surface surface--panel stack stack--xl">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Profile settings</span>
          <h1>Refresh your presence</h1>
        </div>
      </div>

      {formError ? <ErrorState title="Profile update failed" message={formError} /> : null}
      {fieldErrors.length ? (
        <div className="surface surface--muted">
          <strong>Please review:</strong>
          <ul className="plain-list">
            {fieldErrors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <form className="settings-grid" onSubmit={handleSubmit}>
        <div className="surface surface--muted stack">
          <span className="eyebrow">Avatar</span>
          <img
            className="avatar avatar--xl"
            src={preview || profile.avatarUrl}
            alt={profile.name}
          />
          <input
            name="avatar"
            type="file"
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files?.[0];
              setPreview(file ? URL.createObjectURL(file) : '');
            }}
          />
        </div>

        <div className="stack">
          <label className="form-label" htmlFor="settings-name">Name</label>
          <input id="settings-name" name="name" type="text" defaultValue={profile.name} />

          <label className="form-label" htmlFor="settings-username">Username</label>
          <input id="settings-username" name="username" type="text" defaultValue={profile.username} required />

          <label className="form-label" htmlFor="settings-email">Email</label>
          <input id="settings-email" name="email" type="email" defaultValue={profile.email} required />

          <label className="form-label" htmlFor="settings-bio">Bio</label>
          <textarea id="settings-bio" name="bio" rows="5" defaultValue={profile.bio} />

          <div className="inline-actions">
            <button className="button button--accent" disabled={submitting} type="submit">
              {submitting ? 'Saving...' : 'Save profile'}
            </button>
            <button className="button button--ghost" type="button" onClick={() => navigate(-1)}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

function RoomFormPage({ currentUser, mode }) {
  const { pk } = useParams();
  const navigate = useNavigate();
  const endpoint = mode === 'create' ? '/rooms/form/' : `/rooms/${pk}/form/`;
  const { loading, data, error } = useAsyncData(() => apiRequest(endpoint), [endpoint]);
  const [formError, setFormError] = useState('');
  const [fieldErrors, setFieldErrors] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  if (!currentUser) {
    return <Navigate to="/login/" replace />;
  }

  if (loading) {
    return <LoadingState label="Loading room tools..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setFormError('');
    setFieldErrors([]);

    const formData = new FormData(event.currentTarget);
    try {
      const response = await apiRequest(
        mode === 'create' ? '/rooms/' : `/rooms/${pk}/update/`,
        {
          method: 'POST',
          body: formData,
        },
      );
      navigate(`/room/${response.room.id}/`);
    } catch (submitError) {
      setFormError(submitError.data?.message || submitError.message);
      setFieldErrors(toErrorList(submitError.data?.errors));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="surface surface--panel stack stack--xl">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{mode === 'create' ? 'Create room' : 'Update room'}</span>
          <h1>{mode === 'create' ? 'Launch a new study space' : 'Refine your room'}</h1>
        </div>
      </div>

      {formError ? <ErrorState title="Room save failed" message={formError} /> : null}
      {fieldErrors.length ? (
        <div className="surface surface--muted">
          <ul className="plain-list">
            {fieldErrors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <form className="stack" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="room-topic">Topic</label>
        <select id="room-topic" name="topic" defaultValue={data.room?.topic?.id || ''} required>
          <option value="" disabled>Choose a topic</option>
          {data.topics.map((topic) => (
            <option key={topic.id} value={topic.id}>{topic.name}</option>
          ))}
        </select>

        <label className="form-label" htmlFor="room-name">Room name</label>
        <input id="room-name" name="name" type="text" defaultValue={data.room?.name || ''} required />

        <label className="form-label" htmlFor="room-description">Description</label>
        <textarea id="room-description" name="description" rows="6" defaultValue={data.room?.description || ''} />

        <div className="inline-actions">
          <button className="button button--accent" disabled={submitting} type="submit">
            {submitting ? 'Saving...' : mode === 'create' ? 'Create room' : 'Update room'}
          </button>
          <button className="button button--ghost" type="button" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

function TopicCreatePage({ currentUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  if (!currentUser) {
    return <Navigate to="/login/" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    setFieldErrors([]);

    try {
      const response = await apiRequest('/topics/', {
        method: 'POST',
        body: Object.fromEntries(new FormData(event.currentTarget)),
      });
      navigate(`/?q=${encodeURIComponent(response.topic.name)}`);
    } catch (submitError) {
      setError(submitError.data?.message || submitError.message);
      setFieldErrors(toErrorList(submitError.data?.errors));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="surface surface--panel stack">
      <div className="section-heading">
        <div>
          <span className="eyebrow">New topic</span>
          <h1>Create a fresh category</h1>
        </div>
      </div>
      {error ? <ErrorState title="Topic creation failed" message={error} /> : null}
      {fieldErrors.length ? (
        <div className="surface surface--muted">
          <ul className="plain-list">
            {fieldErrors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <form className="stack" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="topic-name">Topic name</label>
        <input id="topic-name" name="name" type="text" placeholder="Machine Learning, Design Crit..." required />
        <div className="inline-actions">
          <button className="button button--accent" disabled={submitting} type="submit">
            {submitting ? 'Creating...' : 'Create topic'}
          </button>
        </div>
      </form>
    </section>
  );
}

function LogoutPage({ onLogout }) {
  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <LoadingState label="Signing you out..." />;
}

function NotFoundPage() {
  return (
    <EmptyState
      title="This page drifted off the map."
      body="Try heading back home and picking up the thread from there."
      action={<Link to="/" className="button button--accent">Back home</Link>}
    />
  );
}

function AppRoutes({ currentUser, sessionLoading, setCurrentUser, onLogout }) {
  return (
    <Layout currentUser={currentUser} sessionLoading={sessionLoading} onLogout={onLogout}>
      <Routes>
        <Route path="/" element={<HomePage currentUser={currentUser} />} />
        <Route path="/login/" element={<AuthPage mode="login" setCurrentUser={setCurrentUser} />} />
        <Route path="/register/" element={<AuthPage mode="register" setCurrentUser={setCurrentUser} />} />
        <Route path="/logout/" element={<LogoutPage onLogout={onLogout} />} />
        <Route path="/room/:pk/" element={<RoomPage currentUser={currentUser} />} />
        <Route path="/profile/:pk/" element={<ProfilePage currentUser={currentUser} />} />
        <Route path="/settings/profile/" element={<ProfileSettingsPage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/create-room/" element={<RoomFormPage currentUser={currentUser} mode="create" />} />
        <Route path="/update-room/:pk/" element={<RoomFormPage currentUser={currentUser} mode="update" />} />
        <Route path="/create-topic/" element={<TopicCreatePage currentUser={currentUser} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  const [sessionLoading, setSessionLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const refreshSession = async () => {
    setSessionLoading(true);
    try {
      const data = await apiRequest('/bootstrap/');
      setCurrentUser(data.currentUser);
    } catch {
      setCurrentUser(null);
    } finally {
      setSessionLoading(false);
    }
  };

  useEffect(() => {
    refreshSession();
  }, []);

  const handleLogout = async () => {
    try {
      await apiRequest('/logout/', { method: 'POST' });
    } finally {
      setCurrentUser(null);
      window.location.href = '/';
    }
  };

  return (
    <AppErrorBoundary>
      <BrowserRouter>
        <AppRoutes
          currentUser={currentUser}
          sessionLoading={sessionLoading}
          setCurrentUser={setCurrentUser}
          onLogout={handleLogout}
        />
      </BrowserRouter>
    </AppErrorBoundary>
  );
}
