// hooligan
// Samuel Gutierrez
// 25/2/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objspeedx = 1;
let objspeedy = 0;
let objposx = 10;
let objposy = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
objex();

}

function movment(){




}







function objex() {

  ellipse (objposx, objposy, 10, 10)
  
  objspeedy = objspeedy + 0.005;
  objposy = objposy + objspeedy;
  

  objposx = objposx + objspeedx;




}
