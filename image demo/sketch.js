// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let banana;

function preload() {
banana= loadImage("assets/banana.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill ("red")
  background(220);
image(banana, mouseX-150, mouseY-150, 300, 300)
}
