import { useState } from "react";
import api from "../services/api";

function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);

    try {
      const response = await api.post("/chat", {
        question,
      });

      setAnswer(response.data.answer);
      setQuestion("");
    } catch (error) {
      console.error(error);
      alert("Failed to get LifeVault AI response.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold text-white mb-5">
         Ask LifeVault AI
      </h2>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something about your memories..."
        className="w-full h-28 bg-slate-800 text-white rounded-lg p-4 outline-none"
      />

      <button
        onClick={askAI}
        className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium"
      >
        {loading ? (
  <span className="flex items-center gap-2">
    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
    Thinking...
  </span>
) : (
  "Ask LifeVault AI"
)}
      </button>

      {answer && (
        <div className="mt-6 bg-slate-800 rounded-lg p-5">
          <h3 className="text-lg font-semibold text-white mb-3">
            LifeVault AI Response
          </h3>

          <div className="text-slate-300 whitespace-pre-wrap leading-8">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}

export default AIChat;