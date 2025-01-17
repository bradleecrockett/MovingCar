// MovingCar
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

var xPos = 200;
var yPos = 200;
var carSize = 100;
//TODO #3a declare a variable named BLUE

function setup() {
  //This function get run once at the start of the program
  createCanvas(400, 400);
  background(0);
  //Set the number of frames per second
  frameRate(5);
  //TODO #3b initialize the BLUE var to equal the color
  // blue using the color(#, #, #) function
}

//TODO#2 modify the drawCar function that takes a 4th
// parameter `c` for color. Use that parameter to change
// the color of the car
function drawCar(x, y, len) {
  rectMode(CENTER);
  fill(255, 0, 0);
  rect(x, y, len, len / 2);
  fill(0);
  rect(x - len / 3, y + len / 3, len / 4, len / 8);
  rect(x + len / 3, y + len / 3, len / 4, len / 8);
  rect(x - len / 3, y - len / 3, len / 4, len / 8);
  rect(x + len / 3, y - len / 3, len / 4, len / 8);
}

function draw() {
  background(240); //light grey bg
  drawCar(xPos, yPos, carSize);
  //TODO #1 call the drawCar function again in a different
  // location with a different length

  //TODO #4 call you new drawCar function to draw a blue
  // car with length of 50 @ (100,50)

  //TODO #5 create a car that follows the mouse

  //TODO #6 use your function to create a car that drives  across
  // the screen from left to right and loops back to the left.
}
