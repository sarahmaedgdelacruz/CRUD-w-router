import { Link, Outlet } from "react-router";
import { useEffect, useState } from "react";

function Tasklists() {
  const [tasklists, setTasklists] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasklists(JSON.parse(saved));
  }, []);


return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Task List</h2>

      {tasklists.length === 0 ? (
        <p className="text-violet-500">No tasks saved.</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {tasklists.map((task) => (
            <li key={task.id}>
              <Link
                className="text-blue-600 underline"
                to={`/all-task/${task.id}`}
              >
                {task.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Outlet />
    </div>
  );
}

export default Tasklists;