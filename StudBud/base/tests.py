import shutil
import tempfile

from django.contrib.auth import get_user_model
from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase, override_settings
from django.urls import reverse

from .models import Message, Room, Topic

User = get_user_model()

TEST_MEDIA_ROOT = tempfile.mkdtemp()

@override_settings(MEDIA_ROOT=TEST_MEDIA_ROOT)
class ApiTests(TestCase):
    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()
        shutil.rmtree(TEST_MEDIA_ROOT, ignore_errors=True)

    def test_register_api_hashes_password_and_normalizes_identity_fields(self):
        response = self.client.post(
            reverse('api-register'),
            {
                'name': 'Parth',
                'username': 'ParthUser',
                'email': 'PARTH@EXAMPLE.COM',
                'bio': 'Building the next version',
                'password1': 'studybud-secure-pass123',
                'password2': 'studybud-secure-pass123',
            },
        )

        self.assertEqual(response.status_code, 201)
        payload = response.json()
        user = User.objects.get(email='parth@example.com')
        self.assertTrue(payload['ok'])
        self.assertEqual(user.username, 'parthuser')
        self.assertNotEqual(user.password, 'studybud-secure-pass123')
        self.assertTrue(user.check_password('studybud-secure-pass123'))

    def test_message_api_requires_authentication(self):
        owner = User.objects.create_user(username='owner', email='owner@example.com', password='testpass123')
        topic = Topic.objects.create(name='Django')
        room = Room.objects.create(host=owner, topic=topic, name='Study Hall')

        response = self.client.post(reverse('api-message-create', args=[room.id]), {'body': 'Hello'})

        self.assertEqual(response.status_code, 401)
        self.assertFalse(Message.objects.exists())

    def test_non_host_cannot_delete_room_over_api(self):
        host = User.objects.create_user(
            username='host',
            email='host@example.com',
            password='testpass123',
        )
        outsider = User.objects.create_user(
            username='outsider',
            email='outsider@example.com',
            password='testpass123',
        )
        topic = Topic.objects.create(name='Python')
        room = Room.objects.create(host=host, topic=topic, name='Algorithms')

        self.client.force_login(outsider)
        response = self.client.post(reverse('api-room-delete', args=[room.id]))

        self.assertEqual(response.status_code, 403)
        self.assertTrue(Room.objects.filter(id=room.id).exists())

    def test_profile_update_supports_avatar_upload(self):
        user = User.objects.create_user(
            username='avataruser',
            email='avatar@example.com',
            password='testpass123',
        )
        self.client.force_login(user)

        avatar = SimpleUploadedFile(
            'avatar.png',
            (
                b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01'
                b'\x00\x00\x00\x01\x08\x06\x00\x00\x00\x1f\x15\xc4\x89'
                b'\x00\x00\x00\x0cIDATx\x9cc\xf8\xcf\xc0\x00\x00\x03\x01'
                b'\x01\x00\xc9\xfe\x92\xef\x00\x00\x00\x00IEND\xaeB`\x82'
            ),
            content_type='image/png',
        )

        response = self.client.post(
            reverse('api-profile-update', args=[user.id]),
            {
                'name': 'Avatar User',
                'username': 'avataruser',
                'email': 'avatar@example.com',
                'bio': 'Fresh profile picture',
                'avatar': avatar,
            },
        )

        self.assertEqual(response.status_code, 200)
        user.refresh_from_db()
        self.assertTrue(user.avatar.name)
        self.assertIn('avatarUrl', response.json()['profile'])
