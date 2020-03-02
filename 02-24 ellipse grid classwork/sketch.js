function setup() {
  createCanvas(500, 500);
}
function draw() {
  for (i = 0; i < 500; i++) {
    stroke(i * 0.5, i * 0.5, 150);
    line(0, i, 500, i);
  }
  // for (i = 0; i < 500; i++) {
  //   stroke(i * 0.5);
  //   line(i, 0, i, 500);
  // }
}
//BETTER ELLIPSE GRID
function setup() {
  createCanvas(200, 300);
  background(220);
  var dia = width/10;
  var rad = dia/2;
  for (i = rad; i < width; i += dia) {
    for (j = rad; j < height; j += dia) {
      ellipse(i, j, dia, dia);
    }
  }
}
function draw() {
}