// variables
var redcolor;
var bluecolor;
var greencolor;
var transparency;
function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);
}
function draw() {
  // random colors and transparency
  redcolor = random (255);
  bluecolor = random (255);
  greencolor = random (255);
  transparency = random (255);
  if (mouseIsPressed)
      fill (redcolor, bluecolor, greencolor, transparency)
  ellipse(mouseX, mouseY, 25, 25);
}