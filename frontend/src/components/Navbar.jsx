import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="flex justify-between items-center bg-slate-800 text-white p-4"
    >
      <h2 className="text-xl font-bold">ElevateAI</h2>

      <div className="space-x-4">
        <Link to="/">Home</Link>

        <Link to="/career">Career Mentor</Link>

        <Link to="/study">Study Planner</Link>

        <Link to="/ask-ai">Ask AI</Link>
      </div>
    </nav>
  );
}

export default Navbar;