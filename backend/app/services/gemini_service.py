import os
from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.getenv("LLM_API_KEY"))


def generate_ai_answer(question: str, memory_context: str):
    prompt = f"""
You are LifeVault AI, a personal memory assistant.

Answer the user's question using ONLY the saved memory context.

Rules:
- Give a clear, helpful answer.
- Use bullet points when useful.
- Do not show raw JSON, IDs, or technical database details.
- If memories are relevant, summarize them naturally.
- If the answer is not present in memories, say:
  "I couldn't find this in your saved memories yet."
- End with one practical suggestion if possible.

User question:
{question}

Saved memories:
{memory_context}

Write the final answer in a friendly, simple, polished style.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    return response.text