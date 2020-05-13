import React from 'react';
import {Imagedraw} from './picture.js';
import {Generate} from './generate';



export function Location(props) {
  const name = props.name;

  return (
    <div className="location">
      <span className="restaurants">{name.name}</span>
      <span className="remove-button" onClick={() => props.remove(name.name)}>&#x2716;</span>
      <Imagedraw />
      <span className="food-type">{name.type}</span>
      <Generate />
    </div>
  );
}

