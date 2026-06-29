import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MemoryCard from "./components/MemoryCard";
import AddMemoryModal from "./components/AddMemoryModal";
import api from "./services/api";

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

        <div className="mt-10">
          {memories.map((memory) => (
            <MemoryCard
              key={memory.id}
              id={memory.id}
              title={memory.title}
              category={memory.category}
              description={memory.description}
              date={memory.date}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </main>

      <AddMemoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;