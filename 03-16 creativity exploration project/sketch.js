let x = 0
let y = 0
const sprayrange = 800
function setup() {
  createCanvas(800, 600)
  background(255) // one number 0-255 is dark to light
}
function draw() {
  background(255, 10) 
  for(let counter=0; counter<100; counter++) {
      fill('orange') // red and green and 0 for orange
      stroke('orange') // just orange
      x = (random(-sprayrange, sprayrange)
            +random(-sprayrange, sprayrange))
      y = (random(-sprayrange, sprayrange)
            +random(-sprayrange, sprayrange))
      
      square (x, y, 20) 
  }
}

