import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <nav className="bg-pink-500 h-20 text-white p-4 flex justify-between items-center">
  <Link to="/" className="font-bold text-lg">
    Task App
  </Link>
  <Link to="/all-task" className="font-medium text-lg">
    All Tasks
  </Link>
</nav>



        <div className="p-6">
        <Outlet />
      </div>
      </div>
    </>
  );
}

export default App;
