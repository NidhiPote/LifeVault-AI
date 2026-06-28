import Navbar from "./components/Navbar";
import MemoryCard from "./components/MemoryCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-10">
        <h2 className="text-3xl font-bold text-white">
          Welcome back 👋
        </h2>

        <p className="mt-2 text-slate-400">
          Here are your recent memories.
        </p>

        <div className="mt-10">
          <MemoryCard
            title="Interview Feedback"
            category="Career"
            description="Need stronger SQL joins and API testing skills."
            date="28 June 2026"
          />
        </div>
      </main>
    </div>
  );
}

export default App;