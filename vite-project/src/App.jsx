import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";

import { deleteItem } from "./functions";
import InputForm from "./components/InputForm";
import TaskList from "./components/TaskList";
import Bulle from "./components/Bulle"; // ← ✅ tu ajoutes juste ça
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");
  const [tab, setTab] = useState([]);
  const compt = useRef(0);

  function addItem(text) {
    const newTab = [...tab, { id: compt.current++, value: text }];
    setTab(newTab);
  }

  function deleteButton(id) {
    const tab3 = deleteItem(tab, id);
    setTab(tab3);
  }

  function faireBoom() {
    alert("🧷 BOOM !");
    addItem("Nettoyer ballon crevé"); // ← tu peux activer ça si tu veux
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
          Champ de saisie textuel :{" "}
          <input onChange={(e) => setValue(e.target.value)} />
        </label>
        <p>Tu as tapé : {value}</p>
      </div>

      <h1>step 2-3</h1>
      <InputForm onAdd={addItem} />
      <TaskList tab={tab} onDelete={deleteButton} />

      <h1>step 4</h1>
      <p></p>
      <Bulle onExplosion={faireBoom} /> {/* ← on branche juste ici */}
    </>
  );
}
