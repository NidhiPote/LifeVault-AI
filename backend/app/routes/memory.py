from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.memory import Memory
from app.schemas.memory import MemoryCreate, MemoryResponse
from app.services.cognee_service import remember_memory
router = APIRouter(tags=["Memories"])


@router.post("/memory", response_model=MemoryResponse)
async def add_memory(memory_data: MemoryCreate, db: Session = Depends(get_db)):
    new_memory = Memory(
        title=memory_data.title,
        description=memory_data.description,
        category=memory_data.category,
        date=memory_data.date,
    )

    db.add(new_memory)
    db.commit()
    db.refresh(new_memory)

    await remember_memory(
        title=new_memory.title,
        description=new_memory.description,
        category=new_memory.category,
        date=str(new_memory.date),
    )

    return new_memory


@router.get("/memories", response_model=list[MemoryResponse])
def get_memories(db: Session = Depends(get_db)):
    return db.query(Memory).order_by(Memory.date.desc()).all()


@router.delete("/memory/{memory_id}")
def delete_memory(memory_id: int, db: Session = Depends(get_db)):
    memory = db.query(Memory).filter(Memory.id == memory_id).first()

    if not memory:
        raise HTTPException(status_code=404, detail="Memory not found")

    db.delete(memory)
    db.commit()

    return {"message": "Memory deleted successfully"}