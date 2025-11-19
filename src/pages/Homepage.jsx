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
    if (!title || !date || !details) {
      alert("Fill all fields");
      return;
    }

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
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h1 className="text-center font-bold mb-4">Task Manager</h1>
      <form
        onSubmit={addTask}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
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
          <button
            className="flex-1 bg-yellow-500 text-white py-2 rounded"
            type="submit"
          >
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

      <div className="w-[450px] mt-6 px-4">
        <h2 className="font-semibold mb-3">Saved Tasks</h2>
        {tasks.length === 0 ? (
          <p className="text-sm text-gray-600">No tasks added yet.</p>
        ) : (
          tasks.map((t, i) => (
            <div
              key={i}
              className="bg-white border rounded p-4 mb-3 flex justify-between items-start"
            >
              <div>
                <div className="font-semibold">{t.title}</div>
                <div className="text-sm text-gray-600">
                  Due: {t.date || "—"}
                </div>
                <div className="text-sm mt-2">{t.details}</div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => startEdit(i)}
                  className="text-blue-600 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(i)}
                  className="text-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Homepage;
