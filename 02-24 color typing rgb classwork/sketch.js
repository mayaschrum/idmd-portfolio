function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
}

function keyTyped () {
  print(key);
  if (key == "r" || key == "R") {
    background (255,0,0);
  } else if (key == "g" || key == "G") {
  background (0, 255, 0);
  } else if (key == "b" || key == "B") {
    background (0, 0, 255);
  }else{
    background (220);
  }
}