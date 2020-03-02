// hooligan
// Samuel Gutierrez
// 25/2/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objspeedx = 0;
let objspeedy = 0;
let objposx = 10;
let objposy;
let objswitch = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  objposy = height - 50;
}


function draw() {
  background(220);
fill ("red");
if (mouseX<=100 && mouseY >=height-100 && objswitch === 0){
  shoot();
  objswitch = 1;
}

objex();
console.log (objposy);
}

function shoot(){
  let basex = 0;
  let basey = height;
  tempx = mouseX - basex ;
  tempy = mouseY - basey ;
  tempy = tempy * 1;

  objspeedx = tempx /100;
  objspeedy = tempy /50;

}







function objex() {

  ellipse (objposx, objposy, 10, 10)
  
  objspeedy = objspeedy + 0.010;
  
  objposy = objposy + objspeedy;
  
  objposx = objposx + objspeedx;
  
  if ( objposy >= height-10){
  objspeedy = objspeedy * -0.75
  }




}
