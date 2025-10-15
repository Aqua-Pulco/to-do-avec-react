import TaskItem from "./TaskItem";


export default function TaskList({ tab, onDelete, onAdd }) {
  return (
    <ul className="list">
      {tab.map((el) => ( 
        <TaskItem key={el.id} el={el} onDelete={onDelete} onAdd={onAdd}/> 
      ))}
    </ul>
  );
}

// <App>
//   └─ TaskList (reçoit onAdd de App)
//        └─ TaskItem (utilise onAdd)