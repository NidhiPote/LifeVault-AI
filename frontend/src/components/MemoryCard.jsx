function MemoryCard({ id, title, category, description, date, onDelete }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-4 shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <div className="flex items-center gap-3">
          <span className="bg-blue-600 px-3 py-1 rounded-full text-sm text-white">
            {category}
          </span>

          <button
            onClick={() => onDelete(id)}
            className="text-red-400 hover:text-red-300 text-sm"
          >
            Delete
          </button>
        </div>
      </div>

      <p className="text-slate-300 mt-3">{description}</p>

      <p className="text-slate-500 text-sm mt-4">{date}</p>
    </div>
  );
}

export default MemoryCard;