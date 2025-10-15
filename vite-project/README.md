### REACT auto-explication

---

## App

Généralement, `App` est le **composant principal**  
→ il reflète le DOM, c’est le **parent**

Il communique avec ses enfants : les components  
via des **canaux de transmission** : les **props**

```txt
    <InputForm onAdd={addItem} />
       │         │       │      
       │         │    fonction passée au component 
       │      prop       via 'onAdd' 
   composant
```

Autrement dit :

> `onAdd` dans `InputForm` = `addItem`

---

### # Déclaration

On déclare des variables (ou des tableaux) avec `useState` :

```js
const [var, setVar] = useState('')
```

```txt
        │     │            │
        │     │            └── 🧰 État d’usage (valeur en cours)
        │     │
        │     └── 🛠 Comment modifier cet état
        │
        └── 📦 La variable utilisée dans le code
```

> Ex :
> `setVar(43)` modifie la valeur de `var` ---> met à jour 

---

### Modifier un tableau

```js
function addItem(text) {
  const newTab = [...tab, { id: compt.current++, value: text }];
  setTab(newTab);
}
```

Explication :

* (React exige une copie, jamais une mutation directe)

🧠 **Image** : on a besoin d'un tableau intermédiaire, on y ajoute la valeur
                et puis on 'écrase' tab avec

---

### Composants

On crée un dossier `components/`
→ on y construit nos **petites briques de page**
chaque Brique commence par une Majuscule

Un **composant**, c’est :

* du HTML prêt à l’emploi
* une fonction React qui **renvoie du JSX**

On les **importe dans App** et on les connecte avec des **props**

> Les props sont comme des ** canaux** 
> y circulent des infos ou des fonctions que l’enfant utilisera
>> les props sont de PROPRIéTéS

---

### ex de composants

# 🧱 1. Composant simple sans props

``` jsx

<Header />
```

🔧 Fichier Header.jsx :

```jsx

export default function Header() {
  return <h1>Bienvenue !</h1>;
}
```

# 📦 2. Composant avec une prop de texte
```jsx

    <Title text="Bienvenue chez moi" />
```

```jsx

    export default function Title({ text }) {
  return <h2>{text}</h2>;
}
```

# 🔁 3. Composant avec une liste (array)

```jsx

    <TaskList tab={todos} />
```

🔧 Fichier TaskList.jsx :

```jsx

export default function TaskList({ tab }) {
  return (
    <ul>
      {tab.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
}
```
Tu donnes un tableau (ex. des tâches).
Le composant fait une boucle map() pour afficher chaque élément dans un <li>.
C’est un composant qui “lit” un tableau.

# 📲 4. Composant avec callback vers le parent

```jsx

<InputForm onAdd={addItem} />

```

🔧 Fichier InputForm.jsx :

```jsx

export default function InputForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const clean = text.trim();
    if (!clean) return;
    onAdd(clean);     // ← On remonte vers App
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

```
Tu envoies un message vers le parent App via onAdd. (onAdd = addItem(text) a un tableau)
Quand l’utilisateur soumet un formulaire, la valeur est transmise vers App.
C’est une brique qui remonte l’info vers le parent.



# 💣 5. Composant qui déclenche un effet

```jsx

<Bulle onExplosion={faireBoom} />

```
🔧 Fichier Bulle.jsx :

```jsx

export default function Bulle({ onExplosion }) {
  return <button onClick={onExplosion}>💥</button>;
}

```
Tu passes une fonction comme prop (faireBoom).
Le bouton l’exécute quand on clique.
C’est une brique interactive.


# 🐥 6. Composant avec enfants (children)

```jsx
<Card>
  <h3>Mon chat</h3>
  <p>Il s'appelle Pixel.</p>
</Card>
```
> Card fabrique la coquille,

🔧 Fichier Card.jsx :
> children en reçoit le remplissage.

```jsx
export default function Card({ children }) {
  return <div className="card">{children}</div>;
}
```
c'est un 'slot' en attente qui dit :
tu pourras avoir du texte dans une div.
et il prenrda les parametres de la class "card"


## ⚡ React et les {}

> equivalent à ${}
Les accolades {} en React permettent d’ecrire du JavaScript là où tu écris du HTML.

il y a deux paires d'accolades imbriquées dans in onClick{ avec fonction flechée{}}

```jsx

onClick={() => {
  console.log("clic");
  alert("bam");
}}

```
