var radius = 50
var x = radius / 2
var direction = 1
x  += 40
function setup () {
  createCanvas (600, 200);
}
function draw () {
  background(0);
fill('#42c5f5')
if (!mouseIsPressed) { // mouse is NOT Pressed
  x += 5; // Increase the value of x
  if (x > width + radius) { // If the shape is off screen
    x = 0 - radius // move to the left edge
  }
} else {  
  x += 5 * direction; // Increase the value of x in the proper direction
  if ((x > width) || (x < 0)) { //if shape is on edges of canvas
    direction = -direction; // Flip direction
  }
  if (direction == 1) {
    arc(x, 60, radius, radius, 0.52, 5.76); // Face right
  } else {
    arc(x, 60, radius, radius, 3.67, 8.9); // Face left
  }
}
}