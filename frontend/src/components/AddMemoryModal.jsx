function AddMemoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-white mb-5">
          Add New Memory
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg outline-none"
          />

          <textarea
            placeholder="Description"
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg outline-none h-28"
          />

          <select className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg outline-none">
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

          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white">
            Save Memory
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMemoryModal;