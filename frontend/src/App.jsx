import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MemoryCard from "./components/MemoryCard";
import AddMemoryModal from "./components/AddMemoryModal";
import api from "./services/api";
import AIChat from "./components/AIChat";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    fetchMemories();
  }, []);

  const fetchMemories = async () => {
    const response = await api.get("/memories");
    setMemories(response.data);
  };

  const handleDelete = async (id) => {
    await api.delete(`/memory/${id}`);
    fetchMemories();
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar onAddClick={() => setIsModalOpen(true)} />

      <main className="max-w-7xl mx-auto px-8 py-10">
        <h2 className="text-3xl font-bold text-white">Welcome back 👋</h2>

        <p className="mt-2 text-slate-400">Here are your recent memories.</p>
        <p className="mt-4 text-slate-300">
          You have <span className="font-semibold text-blue-400">{memories.length}</span> memories saved.
        </p>
        <div className="mt-10">
  {memories.length === 0 ? (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
      <p className="text-4xl mb-3">🧠</p>
      <h3 className="text-xl font-semibold text-white">No memories yet</h3>
      <p className="text-slate-400 mt-2">
        Click “Add Memory” to start building your second brain.
      </p>
    </div>
  ) : (
    memories.map((memory) => (
      <MemoryCard
        key={memory.id}
        id={memory.id}
        title={memory.title}
        category={memory.category}
        description={memory.description}
        date={memory.date}
        onDelete={handleDelete}
      />
    ))
  )}
</div>
        <AIChat />
      </main>

      <AddMemoryModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onMemoryAdded={fetchMemories}
    />
    </div>
  );
}

export default App;