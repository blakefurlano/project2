import React, { useState } from 'react';
import './App.css';
// import {Generate} from './generate.js';
import { Location } from './location.js';



const restaurants = [
  { name: "Arbys", type: "Fast-Food" },
  { name: "Arbys3", type: "Fast-Food" },
  { name: "Arbys2", type: "Fast-Food" },
  { name: "Arbys1", type: "Fast-Food" },

];

function App() {
  const [name, setName] = useState(restaurants);

  const removeName = name => {
    setName(name.filter(name => name.name !== name));
  }
  return (
    <div id="food-root">
      {name.map(name => <Location key={name.name/*need to add a number gerneator to be a key generator*/}
        name={name} remove={removeName} />)}
    </div>


  );
}

export default App;
