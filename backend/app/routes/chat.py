from fastapi import APIRouter
from app.schemas.chat import ChatRequest, ChatResponse
from app.services.cognee_service import recall_memories
from app.services.gemini_service import generate_ai_answer

router = APIRouter(tags=["AI Chat"])


@router.post("/chat", response_model=ChatResponse)
async def chat_with_memory(chat_data: ChatRequest):
    recalled_memories = await recall_memories(chat_data.question)

    memory_context = str(recalled_memories)

    answer = generate_ai_answer(
        question=chat_data.question,
        memory_context=memory_context,
    )

    return {"answer": answer}