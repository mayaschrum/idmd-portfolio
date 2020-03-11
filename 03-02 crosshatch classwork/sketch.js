function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 179, 156);
  // background (255, 179, 156, 0.63)
  for (i = 0; i < mouseX; i += 5) {
    for (j = 0; j < mouseY; j += 5){
      line(0, i, mouseX, i);
        line(j, 0, j, mouseY);
  }

  //line (mouseY, mouseX, mouseY, 0);
  }
}