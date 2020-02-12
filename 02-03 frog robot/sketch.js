function setup() {
  createCanvas(600, 600);
}
 
function draw() {
  background(220);
  //outlines of arms and legs
  strokeWeight(9)
  stroke (0)
  //left leg
    line (165, 290, 100, 330)
  //right leg
    line (232, 300, 280, 370)
  //left arm
  line(170, 235, 120, 180)
  //right arm
  line (230, 235, 260, 180)
  //arms and legs
  strokeWeight(7)
  stroke (93, 158, 27)
  //left arm
  line(170, 235, 120, 180)
  //right arm
  line (230, 235, 260, 180)
  //left leg
  line (165, 290, 100, 330)
  //right leg
  line (232, 300, 280, 370)
   //green color
  fill(93, 158, 27)
  strokeWeight(1)
  stroke (0)
  //body shape
  ellipse(200, 270, 75, 120)
  //head shape
  ellipse(200, 200, 70, 70)
  //white color
  fill(255)
  //left white eye
  ellipse(180, 180, 20, 30)
    //left eye pupil
  fill(0)
  ellipse(180, 180, 2, 2)
  // right white eye
  fill(255)
  ellipse(220, 180, 20, 30)
  //right eye pupil
  fill(0)
  ellipse(220, 180, 2, 2)
  //tongue outline
  strokeWeight (11)
      line (190, 209, 200, 270)
  //tongue
  strokeWeight (9)
  stroke (240, 140, 127)
  line (190, 209, 200, 270)
  //mouth
    strokeWeight (1.5)
    stroke (0)
  line(165, 205, 220, 205)  
  //tongue midline
  strokeWeight (1)
    line (190, 206, 200, 270)
  
    //left foot toes outline
  strokeWeight (10)
  stroke (0)
    line (100, 330, 70, 340)
  line (100, 330, 90, 360)
  line (100, 330, 111, 360)
    //left foot toes (right to left)
strokeWeight (8)
  stroke (93, 158, 27)
  line (100, 330, 70, 340)
  line (100, 330, 90, 360)
  line (100, 330, 111, 360)
  //right foot toes outline
  strokeWeight (10)
  stroke (0)
    line (270, 390, 275, 360)
  line (290, 390, 275, 360)
  line (310, 370, 275, 360)
//right foot toes
  strokeWeight (8)
  stroke (93, 158, 27)
  line (270, 390, 275, 360)
  line (290, 390, 275, 360)
  line (310, 370, 275, 360)
  
}