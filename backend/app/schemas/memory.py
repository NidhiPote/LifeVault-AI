from datetime import date, datetime
from pydantic import BaseModel


class MemoryCreate(BaseModel):
    title: str
    description: str
    category: str
    date: date


class MemoryResponse(BaseModel):
    id: int
    title: str
    description: str
    category: str
    date: date
    created_at: datetime

    class Config:
        from_attributes = True