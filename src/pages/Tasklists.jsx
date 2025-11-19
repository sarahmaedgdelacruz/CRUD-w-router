function Tasklists() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Task List</h2>
      <ul>
        {tasklists.map((task) => (
          <li key={task.id}>
            <Link className="text-white-500 underline" to={"/task/${task.id}"}>
              {task.name}
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default Tasklists;
