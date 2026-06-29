from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine, Base
from app.models import memory
from app.routes import memory as memory_routes

app = FastAPI(title="LifeVault AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(memory_routes.router)


@app.get("/")
def root():
    return {"message": "LifeVault AI backend is running"}