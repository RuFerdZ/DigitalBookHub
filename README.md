# 📕 DigitalBookHub 

> Done as a part of AML 1204: Python Programming In Canada @ Lambton College -  Group project

This is the repository which holds the code for the DigitalBookHub, a CRUD application for a public digital e-library system.

![Web application user interface](/assets/UI.png)


Features:

- Users can search, view and download books.
- Registered users can upload books.

## Team Members 🧑🏻‍🤝‍🧑🏼

- C0904675 - [Yolimar Rios](https://github.com/yolimar01)
- C0908671 - [Chris Mary Bulatao](https://github.com/ChrisMary-Bulatao)
- C0903980 - [Vihangi Kolamunna](https://github.com/vihangihk)
- C0906287 - [William Binitie](https://github.com/Jaimewill0511)
- C0918066 - [Galgamuge Emmanuel Fernando](https://github.com/RuFerdZ)

## Pre-requisites 🛠

- [Node JS](https://nodejs.org/en/) stable version.
- [python 3.x](https://www.python.org/downloads/) and configure path.
- [virtualenv](https://pypi.org/project/virtualenv/) python library
- [PostgresSQL](https://www.postgresql.org/download/windows/) v11.x.
- [PostGis](https://postgis.net/documentation/getting_started/) extension.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Optional - only if running via docker).

## URLs

- Access the web application: ```http://localhost:8000```
- Access the admin dashboard: ```http://localhost:8000/admin```
- Postman collection: [Collection](https://elements.getpostman.com/redirect?entityId=9209211-6116f7ed-2c3f-41a5-baef-569e9fd62799&entityType=collection)

## Frontend Configuration 🖼

1) Navigate to ```"\webapp"```:

        D:\DigitalBookHub> cd webapp
        D:\DigitalBookHub\webapp>

2) Run the below command to install the required node modules for the web application:

        D:\DigitalBookHub\webapp> npm install

3) Build the project:

         D:\DigitalBookHub\webapp> npm run build

4) Once the node modules are installed, run the below command to start the web application:

        D:\DigitalBookHub\webapp> npm start

5) The web application will be servered via ```"http://localhost:3000"```

## Database Configuration 🗃

1) Create the database and user.

    Open Windows Command Prompt (CMD) and enter the below commands (outputs are also shown).

    Log into postgreSQL as default user postgres and enter password setup during installation:

        C:\Windows\System32> psql -U postgres
        Password for user postgres:
        psql (11.21)
        WARNING: Console code page (437) differs from Windows code page (1252)
                8-bit characters might not work correctly. See psql reference
                page "Notes for Windows users" for details.
        Type "help" for help.

        postgres=#


    Create database "digitalbookhub":
        
        postgres=# CREATE DATABASE digitalbookhub;
        CREATE DATABASE
    
    Create user "dhb":

        postgres=# CREATE USER dbh;
        CREATE ROLE

    Set user with encrypted password "dbh" (in our case, password is same as username):
    
        postgres=# ALTER USER dbh WITH ENCRYPTED PASSWORD 'dbh';
        ALTER ROLE

2) Configure user and database.

    Connect to the database:

        postgres=# \c digitalbookhub
        You are now connected to database "digitalbookhub" as user "postgres".
        digitalbookhub=# 

    Create schema "digitalbookhub"

        digitalbookhub=# CREATE SCHEMA digitalbookhub;
        CREATE SCHEMA

    Grant all the privileges of the database to the user:

        digitalbookhub=# GRANT ALL PRIVILEGES ON DATABASE digitalbookhub TO dbh;
        GRANT

    Grant all privieges of the schema tables to the user:

        digitalbookhub=# GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA digitalbookhub TO dbh;
        GRANT

    Grant all settings of schema to the user:

        digitalbookhub=# GRANT ALL ON SCHEMA digitalbookhub TO dbh;
        GRANT

    Grant all usages of schema to the user:

        digitalbookhub=# GRANT USAGE ON SCHEMA digitalbookhub TO dbh;
        GRANT

    Create and enable postgis extension on the database:

        digitalbookhub=# CREATE EXTENSION postgis;
        CREATE EXTENSION

    Close the command prompt window.
    
3) Connect to the database.

    The below are the database properties. You can connect to the database via the CMD or any database IDEs.

    - host: jdbc:postgresql://localhost:5432/digitalbookhub
    
    - username: dbh

    - password: dbh

## Backend Configuration ⚙

1. Navigate to ```"\backend"```:

        D:\DigitalBookHub> cd backend
        D:\DigitalBookHub\backend>

2. Create new virtual environment called ```"venv"```:

        D:\DigitalBookHub\backend> virtualenv venv

3. Log in to the virtual environment:

         D:\DigitalBookHub\backend> .\venv\Scripts\activate
         (venv) D:\DigitalBookHub\backend> 

4. Install all the requirements required to run the backend:

        (venv) D:\DigitalBookHub\backend> pip install -r requirements.txt

5. Run the backend:

        (venv) D:\DigitalBookHub\backend> python manage.py runserver
        Watching for file changes with StatReloader
        Performing system checks...

        System check identified no issues (0 silenced).

        You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
        Run 'python manage.py migrate' to apply them.
        December 10, 2023 - 02:00:33
        Django version 5.0, using settings 'backend.settings'
        Starting development server at http://127.0.0.1:8000/
        Quit the server with CTRL-BREAK.




## Run via Docker 🐳

1. Build the Docker image:

        D:\DigitalBookHub> docker build -t digitalbookhub-image .

2. View the built docker image:

        D:\DigitalBookHub> docker image ls
        REPOSITORY             TAG       IMAGE ID       CREATED         SIZE
        digitalbookhub-image   latest    f9ef80828781   2 minutes ago   122MB
        D:\DigitalBookHub>


3. Run the docker image in detached mode:

        D:\DigitalBookHub> docker run -d -p 8000:8000  --name digitalbookhub digitalbookhub-image
        97383644a834c7121ef9a827a345bb5ebafd6f6adb4e71232d13b45fd0456a66
        D:\DigitalBookHub>

4. Confirm the container is running:
        
        D:\DigitalBookHub> docker ps
        CONTAINER ID   IMAGE                  COMMAND                  CREATED          STATUS          PORTS                    NAMES
        97383644a834   digitalbookhub-image   "uvicorn main:app --…"   55 seconds ago   Up 54 seconds   0.0.0.0:8000->8000/tcp   digitalbookhub
        D:\DigitalBookHub>

    The container status should be ```"up"```.


5. Access via the browser:

    - http://localhost:8000/


## Resources 🌐
- [Django Rest Framework Documentation](https://www.django-rest-framework.org/tutorial/quickstart/)
- [ReactJS Documentation](https://react.dev/blog/2023/03/16/introducing-react-dev)
- [DRF Github Projects](https://github.com/RealmTeam/django-rest-framework-social-oauth2)
- [W3Schools](https://www.w3schools.com/)