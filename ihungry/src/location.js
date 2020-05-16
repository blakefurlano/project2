import React from 'react';
import {Imagedraw} from './picture.js';
import {Generate} from './generate';



export function Location(props) {
  const location = props.location;

  return (
    <div className="location">
      
      <span className="restaurants">{location.name}</span>
       {/* <span className="remove-button" onClick={() => props.remove(title.name)}>&#x2716;</span>  */}
      <Imagedraw />
      <span className="food-type">{location.type}</span>
      <a className="generate" href={location.link} target="blank">Take me there</a>
    </div>
  );
}

