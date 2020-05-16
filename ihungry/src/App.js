import React, {useEffect}from 'react';

import './App.css';
// import {Generate} from './generate.js';
import { Location } from './location.js';
import {useSelector, useDispatch} from 'react-redux';
import {loadLocation} from './actions';




function App() {

 const restaurants = useSelector(state => state.restaurants);
 const dispatch = useDispatch();
 const isWaiting = useSelector(state  => state.isWaiting);

// useEffect(() => {
var n = Math.floor(Math.random() * 103) + 1;
//order that a fetch will return a restaurant->  id: name: type: link: img:
const onLoad = () => {
dispatch(loadLocation(n));

}

  // const [title, setTitle] = useState(restaurants);

  // const removeLocation = name => {
  //   setTitle(title.filter(title => title.name !== name));
  // }
  return (
    
    <div id="food-root">
      {isWaiting && <div className="loading-icon" />}
      <div id="greeting">
      Click the button to find a restaurant!
    </div>
      <div id="generate-button"> <button onClick = {onLoad}>Generate</button> </div>
      {restaurants.map(location => <Location key={location.name} location={location}/>)}
     
    </div>

// location={title} remove={removeTitle}
  );
}

export default App;
