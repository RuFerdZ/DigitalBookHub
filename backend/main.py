from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles


app = FastAPI()

# Mount the static files at the root path
app.mount("/", StaticFiles(directory="webapp/build", html=True), name="static")

@app.get("/test")
async def root():
    return {"message": "Hello World"}