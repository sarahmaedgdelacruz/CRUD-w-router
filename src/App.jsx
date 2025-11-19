import "./App.css";
import { Link } from "react-router";

function App() {
  return (
    <>
      <div>
        <nav className="bg-pink-500 h-20% text-white p-4 flex gap-4">
          <Link to="/">Task App</Link>
          <Link to="/all-task">All Tasks</Link>
        </nav>
      </div>
    </>
  );
}

export default App;
