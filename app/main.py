from fastapi import FastAPI
from app.database import engine, Base

app = FastAPI(title="LifeVault AI API")

Base.metadata.create_all(bind=engine)


@app.get("/")
def root():
    return {"message": "LifeVault AI backend is running"}