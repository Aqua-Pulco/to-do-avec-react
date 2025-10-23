import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import InputForm from "./components/InputForm";
import TaskList from "./components/TaskList";
import Bulle from "./components/Bulle";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");
  //manipule lignes de la liste
  const [tasks, setTasks] = useState([]);

  //compte id
  const compt = useRef(0);

  // MAJ ADD tasks avec <li> = text id et status
  function addLi(text) {
    const newTasks = [
      ...tasks,
      { id: compt.current++, value: text, status: "todo" },
    ];
    setTasks(newTasks);
  }

  // MAJ DELETE <li> from tasks avec id
  function deleteTask(id) {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  }

  // MAJ MODIFY <li> from tasks avec id
  function markAs(id) {
    const updated = tasks.map((task) =>
            task.id === id ? { ...task, status: "ongoing" } : task
    );
    setTasks(updated);
  }

  // MAJ ADD <li> a tasks
  function faireBoom() {
    alert("🧷 BOOM !");
    addLi("Nettoyer ballon crevé");
  }

  return (
    <>
      <div className="App">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>step 1</h1>
      <div className="card">
        <label>
          Champ de saisie textuel : {/* ici on va ecouter l'input*/}
          <input
            onChange={(e) => {
              {
                /* et mettre a jour value */
              }
              setValue(e.target.value);
            }}
          />
        </label>
        {/* pour la renvoyer ds le DOM */}
        <p>Tu as tapé : {value}</p>
      </div>

      <h1>step 2-3</h1>
      {/* ici on fait appel au component InputForm */}
      {/* et on lui passe la fonction addLi*/}
      <InputForm onAdd={addLi} />

      {/* ici on fait appel au component TaskList */}
      {/*on lui passe : deleteTask MarkAsOngoing 
        et un filtre qui retient les tasks status todos*/}
      <TaskList
        tasks={tasks.filter((t) => t.status === "todo")}
        onDelete={deleteTask}
        onAdd={markAs}
      />
      {/* Appelle TaskList */}
      {/*on lui passe : deleteTask  
        et un filtre qui retient les tasks status ongo*/}
      <TaskList
        tasks={tasks.filter((t) => t.status === "ongoing")}
        onDelete={deleteTask}
        onAdd={() => {}}
      />

      <h1>step 4</h1>
      <p></p>
      <Bulle onExplosion={faireBoom} />
    </>
  );
}
