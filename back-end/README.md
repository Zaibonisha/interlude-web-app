# Interlude Web App Back-end with Django (DRF)

Simple to do app with implementation of a backend and a frontend to make it more dynamic.

## Usage & Implementation

### Setting Up the Backend

- Next, navigate into the directory:

```markdown
cd interlude-web-app 
```

```markdown
cd back-end
```

- Now install Pipenv using pip:

```markdown
pip install pipenv
```

- And activate a new virtual environment:

```markdown
pipenv shell
```

- Install Django using Pipenv:

```markdown
pipenv install django djangorestframework django-cors-headers
```

- Run migrations:

```markdown
python manage.py migrate
```

- And start up the server:

```markdown
python manage.py runserver
```

Navigate to <http://localhost:8000> in your web browser.
