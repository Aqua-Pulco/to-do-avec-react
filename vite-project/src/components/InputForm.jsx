import { useState } from "react";

export default function InputForm({ onAdd }) {
  
  const [value, setValue] = useState("");
    // fonction qui enleve les espace d'une entrée
    function handleSubmit(e){
    e.preventDefault();
    const cleaned = value.trim(); //ici value renvoie au value= au DOM  A
    if (!cleaned) return;   // on ignore si vide
    onAdd(cleaned);         // appelle additem que le parent a passé en arg / prop > la value va ds TAB
    setValue("");           // on vide le champ value du dom!
  };

  return (
    // Objet envoyé au DOM : formulaire
    // quand tu tapes entrée, executes handleSubmit
    <form onSubmit={handleSubmit}> 
      <input 
        placeholder="" // valeur du placeholder
        value={value} // valeur de value
        onChange={(e) => setValue(e.target.value)} // ecoute et modifie value en temps reel (on tape, on colle, on efface...)
      />
    </form>
  );

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
