# 📕 DigitalBookHub 

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

## Resources 🌐
- [FastAPI Documentation](https://fastapi.tiangolo.com/learn/)
- [ReactJS Documentation](https://react.dev/blog/2023/03/16/introducing-react-dev)
- [Fast API Github Projects](https://github.com/topics/fastapi-crud-app)
- [Building A Simple CRUD Application With FastAPI @ Ben Gorman](https://www.gormanalysis.com/blog/building-a-simple-crud-application-with-fastapi/)
- [W3Schools](https://www.w3schools.com/)