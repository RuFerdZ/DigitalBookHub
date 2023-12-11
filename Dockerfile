FROM python:3.11-alpine as backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app
COPY backend/requirements.txt .
RUN pip install pip==23.2.1
RUN pip install -r requirements.txt

# # Install dependencies
# RUN apk update \
#     && apk add --virtual build-deps gcc python3-dev musl-dev postgresql-dev \
#     && apk add postgresql-libs

# # Upgrade pip and install Python packages
# RUN pip install pip==23.2.1 \
#     && pip install -r requirements.txt \
#     && apk del build-deps


COPY ./backend .


EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]