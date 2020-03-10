// bouncy boy
// Samuel Gutierrez
// 25/2/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objspeedx = 0;
let objspeedy = 0;
let objposx = 5;
let objposy;
let objswitch = 1;
let timeToWait;
let timeLastChanged = 0;
let bounceswitch = 0;
let gravswitch = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  objposy = height - 5;
  timeToWait = (1000 / 60 + 0.00000000001);
}


function draw() {
background(220);
//draws the aiming box and the aiming line.
boxline();
//makes window walls.
barriers();
//the calculations for the power and angle as well as the mouse click interaction.
shoot();
//draws the ball and does the physics for it .
objex();
// the function for manualing speeding the ball up using any key. note- hold down to see effects
speedup();
console.log (objposy);
}

function shoot(){
  let basex = 5;
  let basey = height - 5;

  if (mouseIsPressed){
  objswitch = 0;
  gravswitch = 1;
  }
  if (mouseX<=100 && mouseY >=height-100 && objswitch === 0){
    objswitch = 1;

  tempx = mouseX - basex ;
  tempy = mouseY - basey ;
  tempy = tempy * 1;

  objspeedx = tempx /30;
  objspeedy = tempy /30;
  }
}







function objex() {

  ellipse (objposx, objposy, 10, 10)
  if (gravswitch === 1){
    objspeedy = objspeedy + 0.020;
  
    objposy = objposy + objspeedy;
    
    objposx = objposx + objspeedx;
  }


}

function boxline(){
      
  fill ("red");
  rect (0 ,height , 100 , - 100);
  if (mouseX<=100 && mouseY >=height-100){
    fill("blue");
    line(5, height - 5, mouseX,mouseY);
    fill("red");
  }


}
function barriers(){

  if ( objposy >= height - 5 || objposy <= 5  ){
  
  
    if (millis() > timeToWait + timeLastChanged) {
      if (objposy > height / 2) {
        timeLastChanged = millis();
        objposy = height - 5;
        objspeedy = objspeedy * -0.75
        
      }

      else{
        timeLastChanged = millis();
        objposy = 5;
        objspeedy = objspeedy * -0.75

      }
     
    
   
   
    }
  }
    if ( objposx >= width - 5 || objposx <= 5  ){

  
      if (millis() > timeToWait + timeLastChanged) {
        if (objposx > width/ 2){
          timeLastChanged = millis();
          objposx = width - 5;
          objspeedx = objspeedx * -0.75


        }
        else{
          timeLastChanged = millis();
          objposx = 5;
          objspeedx = objspeedx * -0.75

        }
      
      
      
      }
    }

    

}

function speedup(){
  if (keyIsPressed === true) {
    objspeedx = objspeedx*1.005
    objspeedy = objspeedy*1.005
  }

}
