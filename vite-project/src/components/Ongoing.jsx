import TaskItem from "./TaskItem";


export default function Ongoing({ array }) {
  return (
    <div className="list">
        <h3>Ongoing tasks</h3>
    <ul className="ongoingList">
      {array.map((el) => ( 
        <TaskItem key={el.id} el={el}/> 
      ))}
    </ul>
    </div>
  );
}