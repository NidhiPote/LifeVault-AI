from fastapi import FastAPI
from app.database import engine, Base
from app.models import memory
from app.routes import memory as memory_routes

app = FastAPI(title="LifeVault AI API")

Base.metadata.create_all(bind=engine)

app.include_router(memory_routes.router)


@app.get("/")
def root():
    return {"message": "LifeVault AI backend is running"}