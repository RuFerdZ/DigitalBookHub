# Stage 1: Build React frontend
FROM node:20-alpine as react_builder

WORKDIR /usr/src/app/webapp

COPY webapp/package*.json ./
RUN npm install
COPY webapp/ .
RUN npm run build

# Stage 2: Build FastAPI backend
FROM python:3.11 as fastapi_builder

WORKDIR /usr/src/app/backend

COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ .

# Stage 3: Create the final image
FROM python:3.11-alpine

WORKDIR /usr/src/app

# Copy built React app from the first stage
COPY --from=react_builder /usr/src/app/webapp/build /usr/src/app/webapp/build

# Copy built FastAPI app from the second stage
COPY --from=fastapi_builder /usr/src/app/backend /usr/src/app/backend

# Expose port 8000 for FastAPI backend
EXPOSE 8000

# Command to run the FastAPI backend
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]