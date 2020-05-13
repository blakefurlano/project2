import React from 'react';
import './App.css';
import {Generate} from './generate.js';
import {Location} from './location.js'

function App() {
  return (
    <div id="food-root">
      <Generate />
      <Location />
    </div>
  );
}

export default App;
