// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let colorswitch = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let i = 0; i < height; i+=height / 8) {
  colorswap();
    for (let j = 0; j < width; j+=width / 8) {
      colorswap();
      rect(j,i,width/8,height/8);


    }


 
  }

}

function colorswap() {
  if(colorswitch === 0){

    colorswitch = 1;
    fill(0);
  }
  else{
    colorswitch = 0;
    fill(255);
  }
  
}
