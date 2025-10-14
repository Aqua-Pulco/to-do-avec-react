import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { deleteItem } from "./functions";
import InputForm from "./components/InputForm";
import TaskList from "./components/TaskList";
import { Button } from "./Button/Button"; // tu l'utilises déjà
import "./App.css";

export default function App() {
  const [value, setValue] = useState(""); // ton "step 1" de démo
  const [tab, setTab] = useState([]);     // la liste des tâches

  // Petit compteur d'id qui ne déclenche pas de re-rendu
  const compt = useRef(0);

  // === AJOUT ===
  function addItem(text) {
    const newTab = [...tab, { id: compt.current++, value: text }]; // nouvelle copie
    setTab(newTab); // on met à jour l'état → React ré-affiche
  }

  // === SUPPRESSION ===
  function deleteButton(id) {
    const tab3 = deleteItem(tab, id); // ta fonction utilitaire
    setTab(tab3);                     // on met à jour l'état
  }

  return (
    <>
      <div className="App">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>step 1</h1>
      <div className="card">
        <label>
          Champ de saisie textuel :{" "}
          <input onChange={(e) => setValue(e.target.value)} />
        </label>
        <p>Tu as tapé : {value}</p>
      </div>

      <h1>step 2-3</h1>
      {/* App DONNE la fonction d'ajout à InputForm */}
      <InputForm onAdd={addItem} />

      {/* App DONNE la liste et la fonction de suppression à TaskList */}
      <TaskList tab={tab} onDelete={deleteButton} />
    </>
  );
}
