FROM python:3.11-alpine as backend
WORKDIR /code
COPY ./backend/requirements.txt /code/
RUN pip install pip==23.2.1
RUN pip install -r requirements.txt

