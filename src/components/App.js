import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

const [isOn, setisOn] = useState(false); // this will be used for the Dark Mode Toggle feature
  
const appClass = (event) => {
  
setisOn(!isOn) 
  }

  return (
    <div className={`App ${isOn ? "dark" : "light"}`}>      <header>
        <h2>Shopster</h2>
        <button onClick={appClass}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
