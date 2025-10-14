import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { deleteItem} from "./functions";
import { Button } from "./Button/Button";
import "./App.css";


let compt = 0; //pour key li

export default function App() {
  const [value, setValue] = useState(""); //value pour inputs
  const [tab, setTab] = useState([]); // tableau id input
  // const [li, setLi] = useState(); // permet d'editer une liste

  //--------------------------------------------------------
  //recupere input et le renvoie
  const returnedInput = (e) => {
    const inputValue = e.target[0].value;
    console.log("input", inputValue);
    e.target[0].value = "";
    return inputValue;
  };

//--------------------------------------------------------
// renvoie une liste DOM des taches avec leurs ID (pour ul)

const listTab = (array) => {
  return array.map((el) => (
    <li key={el.id}>
      {el.value}
      <Button onClick={() => deleteButton(el.id)}>x</Button>
    </li>
  ));
};


  //--------------------------------------------------------
  // fonction delete un element de la liste

  const deleteButton = (key) => {
    //on veut pointer la ligne du bouton en question
    
    console.log(key);

    // tab3 accueille le nouveau tableau sans el_id = inputOK
    const tab3 = deleteItem(tab, key);
    // tab devient ce nouveau tableau
    setTab(tab3);
    // on re-ecrit la liste
    listTab(tab3);
  };

  //--------------------------------------------------------
  //recupere les inputs et les mets ds un tableau
  const showList = (e, tableau) => {
    
    const newTab = [...tableau, { id: compt++, value: returnedInput(e) }];
    setTab(newTab);
    return newTab;
  };


  //--------------------------------------------------------
  //----------------DOM-----------------
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
          Champ de saisie textuel :{" "}
          <input onChange={(e) => setValue(e.target.value)} />
        </label>
        <p>Tu as tapé : {value}</p>
      </div>
      <br />

      <h1>step 2-3</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          showList(e, tab);
        }}
      >
        <input />
      </form>
      <div>
        <ul>{listTab(tab)}</ul>
      </div>
      <br />

    </>
  );
}
