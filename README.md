# 🧠 LifeVault AI

> **Your AI-powered second brain that remembers what matters.**

LifeVault AI is an AI-powered memory management application that helps users securely store, organize, and intelligently recall their important memories. Instead of simply saving notes, the application uses **Cognee's memory engine** to retrieve relevant memories and **Google Gemini AI** to generate natural, context-aware responses.

Built for the **Cognee × WeMakeDevs Hackathon**.

---

# 📖 Table of Contents

- Project Overview
- Problem Statement
- Solution
- Features
- How Cognee is Used
- Tech Stack
- System Architecture
- Project Workflow
- Installation
- Environment Variables
- Project Structure
- Future Scope
- Team

---

# 📌 Project Overview

People save important information every day—ideas, goals, reminders, meeting notes, health records, learning resources, and personal experiences.

Traditional note-taking applications only store information. They do not understand relationships between memories or allow users to interact with them naturally.

LifeVault AI transforms saved memories into an intelligent knowledge base. Users can ask questions in natural language, and the application retrieves relevant memories using Cognee before generating meaningful responses with Gemini AI.

---

# ❗ Problem Statement

Users often struggle to remember important personal information scattered across notebooks, messaging apps, and note-taking applications.

Existing solutions focus on storing information rather than understanding it. Searching manually becomes difficult as the amount of information grows.

There is a need for an intelligent memory assistant that can organize, retrieve, and answer questions based on a user's personal memories.

---

# 💡 Solution

LifeVault AI combines:

- Structured memory storage using PostgreSQL
- Intelligent memory indexing and retrieval using Cognee
- Natural language responses powered by Google Gemini AI

This enables users to interact with their saved memories conversationally instead of manually searching through notes.

---

# ✨ Features

- Add new memories
- View all saved memories
- Delete unwanted memories
- Organize memories by category
- AI-powered memory recall
- Natural language question answering
- Semantic memory retrieval using Cognee
- Responsive React dashboard

---

# 🧠 How Cognee is Used

Cognee serves as the application's intelligent memory layer.

### Remember

Whenever a user saves a new memory:

- Memory is stored in PostgreSQL.
- The same memory is indexed into Cognee.

### Recall

When a user asks a question:

- Cognee searches the stored memories.
- Relevant memories are retrieved based on semantic similarity.

### AI Response

The retrieved memories are provided to Google Gemini AI, which generates a clear and context-aware answer for the user.

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

## Backend

- FastAPI
- Python

## Database

- PostgreSQL

## AI & Memory

- Cognee
- Google Gemini AI

---

# 🏗 System Architecture

```text
                React Frontend
                       │
                       ▼
                FastAPI Backend
                 │           │
                 ▼           ▼
          PostgreSQL      Cognee
                 │           │
                 └──────► Relevant Memories
                               │
                               ▼
                         Google Gemini AI
                               │
                               ▼
                       Natural Language Response
```

---

# ⚙️ Project Workflow

### 1. Save Memory

- User enters a new memory.
- Memory is stored in PostgreSQL.
- Memory is indexed into Cognee.

### 2. Ask AI

- User asks a question.
- Cognee retrieves the most relevant memories.
- Gemini AI generates a meaningful response.
- Response is displayed in the React application.

---

# 📂 Project Structure

```text
LifeVault-AI
│
├── backend
│   ├── app
│   ├── routes
│   ├── services
│   ├── models
│   ├── schemas
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── components
│   ├── services
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone <repository-url>

cd LifeVault-AI
```

---

## Backend

```bash
cd backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
LLM_PROVIDER=gemini
LLM_MODEL=gemini-2.5-flash

LLM_API_KEY=YOUR_API_KEY

EMBEDDING_PROVIDER=gemini
EMBEDDING_MODEL=gemini-embedding-001

EMBEDDING_API_KEY=YOUR_API_KEY

ENABLE_BACKEND_ACCESS_CONTROL=false
```

---

# 📸 Screenshots

Add screenshots of:

- Dashboard
- Add Memory Modal
- AI Chat
- Memory Cards

---

# 🚀 Future Scope

- User Authentication
- Voice-based Memory Capture
- Image & Document Memories
- AI-generated Daily Summary
- Smart Memory Recommendations
- Mobile Application
- Calendar Integration
- Memory Timeline

---

# 👩‍💻 Team

**Nidhi Pote**

Built for the **Cognee × WeMakeDevs Hackathon** using React, FastAPI, PostgreSQL, Cognee, and Google Gemini AI.

---

# Acknowledgements

- Cognee
- WeMakeDevs
- Google Gemini AI
- FastAPI
- React
- PostgreSQL

# Home page 
<img width="700" height="600" alt="Screenshot 2026-06-30 at 9 06 11 PM" src="https://github.com/user-attachments/assets/a118edf7-25aa-45e4-a55c-9f2cf4516388" />

# To add new memory
<img width="500" height="500" alt="Screenshot 2026-07-01 at 9 29 58 PM" src="https://github.com/user-attachments/assets/ff62d802-3758-45a2-8014-8fb69f762a33" />
