import { useState } from "react";
import api from "../services/api";

function AddMemoryModal({ isOpen, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Health");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await api.post("/memory", {
        title,
        description,
        category,
        date,
      });

      console.log("Memory saved:", response.data);
      alert("Memory saved successfully!");
      onClose();
    } catch (error) {
      console.error("Error saving memory:", error);
      alert("Failed to save memory. Check console.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-white mb-5">Add New Memory</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg outline-none"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg outline-none h-28"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg outline-none"
          >
            <option>Health</option>
            <option>Career</option>
            <option>Home</option>
            <option>Finance</option>
            <option>Goals</option>
            <option>People</option>
            <option>Learning</option>
            <option>Other</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg outline-none"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-700 text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white"
          >
            Save Memory
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMemoryModal;