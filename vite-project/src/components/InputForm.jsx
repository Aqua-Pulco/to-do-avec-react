import { useState } from "react";

export default function InputForm({ onAdd }) {
  // État local du champ
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleaned = value.trim();
    if (!cleaned) return;   // on ignore si vide
    onAdd(cleaned);         // ← on PREVIENT App
    setValue("");           // on vide le champ
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tape ta tâche puis Entrée"
        value={value}                       // l'input reflète l'état
        onChange={(e) => setValue(e.target.value)} // l'état suit ce que tu tapes
      />
    </form>
  );
}
