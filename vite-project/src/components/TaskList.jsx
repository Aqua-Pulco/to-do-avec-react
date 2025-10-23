import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onAdd }) {
  const todoTasks = tasks.filter(task => task.status === "todo");

  return (
    <ul className="list">
      {todoTasks.map(task => (
        <TaskItem
          key={task.id}
          el={task}
          onDelete={onDelete}
          onAdd={onAdd}
        />
      ))}
    </ul>
  );
}

// <App>
//   └─ TaskList (reçoit onAdd de App)
//        └─ TaskItem (utilise onAdd)