# Stage 1: Build the React app
FROM node:20-alpine as frontend
WORKDIR /app/webapp
ENV PATH /webapp/node_modules/.bin:$PATH
COPY ./webapp/package.json ./
COPY ./webapp/package-lock.json ./
RUN npm install
COPY ./webapp .
RUN npm run build

# Stage 2: Build the FastAPI app
FROM python:3.11-alpine as backend
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install pip==23.2.1
RUN pip install -r requirements.txt
COPY ./backend .

# Copy the built frontend from the previous stage
COPY --from=frontend /app/webapp/build /app/webapp/build

EXPOSE 8000

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0"]