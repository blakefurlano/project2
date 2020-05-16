import React from 'react';
import logo from './imgs/arbys.jpg';

//We tried very hard to use our database of images and spent way to long trying to implement 
//a change in the images we left this in the production to show we tried and we will continue
//to tinker with it after the project is turned in!

var img = new Imagedraw();


console.log(logo);

export function Imagedraw() {
  return (
    <img src={logo} alt="Logo" className="food-image" />
  );
}

// function test(){
// var img = document.createElement("img");
// img.src = "/imgs/arbys.jpg";
// var src = document.getElementById("food");
// src.appendChild(img);

// }

