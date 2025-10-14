import { Button } from "../Button/Button";

export default function TaskItem({ el, onDelete }) {
  return (
    <li>
      {el.value}
      <Button onClick={() => onDelete(el.id)}>x</Button>
    </li>
  );
}
