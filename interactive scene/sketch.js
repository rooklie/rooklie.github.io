// hooligan
// Samuel Gutierrez
// 25/2/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objspeedx = 0;
let objspeedy = 0;
let objposx = 10;
console.log (windowheight);


function setup() {
  createCanvas(windowWidth, windowHeight);
}
let objposy = height - 10;

function draw() {
  background(220);
fill ("red");
  //shoot();
objex();

}

function shoot(){
  let basex = 0;
  let basey = windowheight ;
  tempx = mouseX - basex ;
  tempy = mousey - basey ;
  tempy = tempy * -1;

  objspeedx = tempx /100;
  objspeedy = tempy /100;

}







function objex() {

  ellipse (objposx, objposy, 10, 10)
  
  //objspeedy = objspeedy + 0.005;
  
  //objposy = objposy + objspeedy;
  
  //objposx = objposx + objspeedx;




}
