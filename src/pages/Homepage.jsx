import { useState, useEffect } from "react";

function Homepage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  const save = (next) => {
    localStorage.setItem("tasks", JSON.stringify(next));
    setTasks(next);
  };

  const addTask = (e) => {
    e.preventDefault();

    // validate without using trim: stop if any field is exactly empty string
    if (!title || !date || !details) return alert("Fill all fields");

    if (editingIndex !== null) {
      // update existing
      const next = [...tasks];
      next[editingIndex] = { title, date, details };
      save(next);
      setEditingIndex(null);
    } else {
      // add new
      const newTask = {
        id: Date.now(),
        title,
        date,
        details,
      };
      save([...tasks, newTask]);
    }

    setTitle("");
    setDate("");
    setDetails("");

    const startEdit = (index) => {
  const t = tasks[index];
  setTitle(t.title);
  setDate(t.date);
  setDetails(t.details);
  setEditingIndex(index);
};

const cancelEdit = () => {
  setTitle("");
  setDate("");
  setDetails("");
  setEditingIndex(null);
};

const deleteTask = (index) => {
  const next = tasks.filter((_, i) => i !== index);
  save(next);
};

  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h1 className="text-center font-bold mb-4">Task Manager</h1>
      <form onSubmit={addTask} className="bg-white p-6 rounded shadow w-full max-w-md">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-3"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-3"
        />

        <textarea
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        />

        <div className="flex gap-2">
          <button className="flex-1 bg-yellow-500 text-white py-2 rounded" type="submit">
            {editingIndex !== null ? "Update Task" : "Add Task"}
          </button>

          {editingIndex !== null && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-300 text-black py-2 px-4 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Homepage;