FROM python:3.11-alpine as backend

# avoids writing python bytecode into disk
ENV PYTHONDONTWRITEBYTECODE 1

# ensures python outputs are send directly to terminal
ENV PYTHONUNBUFFERED 1

# set working directory
WORKDIR /app

# copy requirments.txt to working directory
COPY backend/requirements.txt .

# install libraries required
RUN pip install pip==23.2.1
RUN pip install -r requirements.txt

COPY ./backend .

# expose port 8000 as the backend runs on it
EXPOSE 8000

# start the backend
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

