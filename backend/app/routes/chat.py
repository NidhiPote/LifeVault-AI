from fastapi import APIRouter
from app.schemas.chat import ChatRequest, ChatResponse
from app.services.cognee_service import recall_memories

router = APIRouter(tags=["AI Chat"])


@router.post("/chat", response_model=ChatResponse)
async def chat_with_memory(chat_data: ChatRequest):
    results = await recall_memories(chat_data.question)

    answer = f"""
Based on your saved memories, here is what I found:

{results}
"""

    return {"answer": answer}