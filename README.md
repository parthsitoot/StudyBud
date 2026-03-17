# StudyBud

StudyBud is a Django-based discussion app for creating rooms, posting messages, and managing user profiles.

## Stack

- Python 3.11
- Django 5.2.12
- Pillow 12.1.1
- React 19
- Vite 8

## Setup

```bash
cd StudBud
python -m venv env
source env/bin/activate
pip install -r requirements.txt
npm install
npm run build
python manage.py migrate
python manage.py runserver
```

## Environment

These optional environment variables make the project safer to deploy:

```bash
export DJANGO_SECRET_KEY="replace-me"
export DJANGO_DEBUG="true"
export DJANGO_ALLOWED_HOSTS="localhost,127.0.0.1"
```

## Checks

```bash
python manage.py check
python manage.py test
npm run build
```
