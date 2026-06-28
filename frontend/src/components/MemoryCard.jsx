function MemoryCard({ title, category, description, date }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <span className="bg-blue-600 px-3 py-1 rounded-full text-sm text-white">
          {category}
        </span>
      </div>

      <p className="text-slate-300 mt-3">
        {description}
      </p>

      <p className="text-slate-500 text-sm mt-4">
        {date}
      </p>
    </div>
  );
}

export default MemoryCard;