function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">
            LifeVault AI
          </h1>

          <p className="text-sm text-slate-400">
            Your AI remembers what you forget.
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white font-medium transition">
          + Add Memory
        </button>
      </div>
    </nav>
  );
}

export default Navbar;