import React from 'react';
import logo from './imgs/arbys.jpg';
var img = new Imagedraw();


console.log(logo);

export function Imagedraw(){
  return(
   <img src={logo} alt="Logo" className="food-image" />
  );
}

// function test(){
// var img = document.createElement("img");
// img.src = "/imgs/arbys.jpg";
// var src = document.getElementById("food");
// src.appendChild(img);

// }

