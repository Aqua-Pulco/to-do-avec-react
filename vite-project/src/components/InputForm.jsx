import { useState } from "react";

export default function InputForm({ onAdd }) {
  
  const [value, setValue] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder=""
        value={value} // l'input reflète l'état de value ''
        onChange={(e) => setValue(e.target.value)} // l'état suit ce que tu tapes
      />
    </form>
  );

    function handleSubmit(e){
    e.preventDefault();
    const cleaned = value.trim(); //ici value renvoie au value= au DOM  A
    if (!cleaned) return;   // on ignore si vide
    onAdd(cleaned);         // appelle additem que le parent a passé en arg / prop
    setValue("");           // on vide le champ value
  };

}

// App
//  ├── stocke la liste dans [tab]
//  ├── crée une fonction addItem pour ajouter à cette liste
//  └── donne addItem à InputForm sous le nom onAdd


// InputForm
//  ├── stocke la valeur tapée dans [value]
//  └── quand on appuie sur Entrée :
//        └── appelle onAdd(cleaned)
//              └── qui appelle addItem(cleaned)
