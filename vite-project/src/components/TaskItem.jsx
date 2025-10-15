import { Button } from "../Button/Button";
import { handleCheckbox } from "../functions";

export default function TaskItem({ el, onDelete, onAdd }) {
  
  return (
    <div className="listLine">
      <li>
        <input className="checkbox" type="checkbox" onChange={(e) => {
            const response =handleCheckbox(e)
            if (!response) return
            else {
                console.log(el.id, el.value)
                onAdd(el.id, el.value)
                // onDelete(el.id)}
            }}} />
        {el.value}
        <Button className="deleteBtn" onClick={() => onDelete(el.id)}>
          x
        </Button>
      </li>
    </div>
  );
}



// <App>
//   └─ TaskList (reçoit onAdd de App)
//        └─ TaskItem (utilise onAdd)
