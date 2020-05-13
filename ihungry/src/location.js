import React from 'react';

var _img = document.getElementById('id1');
var newImg = new Image;
newImg.onload = function(){
  _img.src = this.src;
}
export function Location(){
  <div className="location">
    <span className="restaurants">Name</span>
    <span className="remove-button">&#x2716;</span>
    <span className="food-type">Type</span>
    newImg();
  </div>
}