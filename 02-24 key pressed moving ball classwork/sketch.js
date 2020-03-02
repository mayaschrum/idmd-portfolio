var x = 50;
var y = 50;
var dia = 25;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(81, 166, 128);
  fill(247, 235, 183);
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      x = x + 5;
      if ( x >= width-dia/2) x = width-dia/2;
    } else if (keyCode == LEFT_ARROW) {
      x = x - 5;
    } else if (keyCode == UP_ARROW) {
      y = y - 5;
    } else if (keyCode == DOWN_ARROW) {
      y = y + 5;
    }
  }
  ellipse(x, y, dia, dia);
}