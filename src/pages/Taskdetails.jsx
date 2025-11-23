import { useParams } from "react-router";
import { useEffect, useState } from "react";

function Taskdetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const tasks = JSON.parse(saved);
      const found = tasks.find((t) => String(t.id) === String(id));
      setTask(found);
    }
  }, [id]);

  if (!task) {
    return (
      <div className="mt-6 p-4 bg-white rounded shadow">
        <p className="text-gray-600">Task not found.</p>
      </div>
    );
  }


  return (
    <div className="mt-6 p-4 bg-white rounded shadow max-w-md">
      <h3 className="text-xl font-bold mb-2">{task.title}</h3>
      <p className="text-gray-700 text-sm mb-2">
        <span className="font-semibold">Due:</span> {task.date}
      </p>
      <p className="text-gray-800">{task.details}</p>
    </div>
  );
}

export default Taskdetails;