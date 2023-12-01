# 📕 DigitalBookHub 

> Done as a part of AML 1204: Python Programming In Canada @ Lambton College -  Group project

This is the repository which holds the code for the DigitalBookHub, a CRUD application for a public digital e-library system.

![Web application user interface](/assets/UI.png)


Features:

- Users can search, view and download books.
- Registered users can upload books.

## Team Members 🧑🏻‍🤝‍🧑🏼

## Pre-requisites 🛠

## URLs

## Frontend Configuration 🖼

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

## Run via Docker

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
- [FastAPI Documentation](https://fastapi.tiangolo.com/learn/)
- [ReactJS Documentation](https://react.dev/blog/2023/03/16/introducing-react-dev)
- [Fast API Github Projects](https://github.com/topics/fastapi-crud-app)
- [Building A Simple CRUD Application With FastAPI @ Ben Gorman](https://www.gormanalysis.com/blog/building-a-simple-crud-application-with-fastapi/)
- [W3Schools](https://www.w3schools.com/)