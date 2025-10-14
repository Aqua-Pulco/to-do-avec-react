import TaskItem from "./TaskItem";

export default function TaskList({ tab, onDelete }) {
  return (
    <ul>
      {tab.map((el) => (
        <TaskItem key={el.id} el={el} onDelete={onDelete} />
      ))}
    </ul>
  );
}
