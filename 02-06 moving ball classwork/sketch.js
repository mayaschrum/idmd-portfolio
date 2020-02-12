var x = 25;
var dir = 1;
var speed = 150

function setup() {
  createCanvas(400, 500);
  background(120, 200, 255);
}

function draw() {
  background(234, 255, 0);
  noStroke();
  //fill(255, 0, 0);
    fill (random (0, 255), random (0, 255), random (0, 255))
  ellipse (x, 0, 50, 50);
  ellipse(x, 100, 50, 50);
  ellipse (x, 200, 50, 50);
  ellipse (x, 300, 50, 50);
  ellipse (x, 400, 50, 50);
  ellipse (x, 500, 50, 50);
  //fill (0, 255, 9);
  fill (random (0, 255), random (0, 255), random (0, 255))
  ellipse (x, 0, 25, 25);
  ellipse (x, 100, 25, 25);
  ellipse (x, 200, 25, 25);
  ellipse (x, 300, 25, 25);
  ellipse (x, 400, 25, 25);
  ellipse (x, 500, 25, 25);
  //fill (255, 0, 221)
    fill (random (0, 255), random (0, 255), random (0, 255))
  ellipse (x, 50, 40, 40);
  ellipse (x, 150, 40, 40);
  ellipse (x, 250, 40, 40);
  ellipse (x, 350, 40, 40);
  ellipse (x, 450, 40, 40);
  //fill (0, 221, 255)
    fill (random (0, 255), random (0, 255), random (0, 255))
  ellipse (x, 50, 25, 25);
  ellipse (x, 150, 25, 25);
  ellipse (x, 250, 25, 25);
  ellipse (x, 350, 25, 25);
  ellipse (x, 450, 25, 25);
  if (x > 275 || x < 25) {
      

    dir = dir * -1;
  }
  x = x + speed * dir;
  // x = (x + 1) % 275;
  // x = min(x + 1, 275);
  // x = x + 1;
}