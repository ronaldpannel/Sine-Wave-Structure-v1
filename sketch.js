let radius, step;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  step = 1;
}

function draw() {
  background(0);

  rotateX(60);
  noFill();
  strokeWeight(5)
  orbitControl()

  for (let i = 0; i < 50; i += 1) {
    let r = map(sin(frameCount), -1, 1, 0, 255);
    let g = map(i, 1, 20, 0, 255);
    let b = map(cos(frameCount), -1, 1, 255, 0);
    stroke(r, g, b);

    rotate(frameCount / 20);

    beginShape();

    for (let j = 0; j < 360; j += step) {
      radius = i * 6;

      let x = (radius / 2) * cos(j);
      let y = (radius / 2) * sin(j);
      let z = sin(frameCount * 2 + i * 5) * 50;

      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
  if (step <= 360) {
    step += 0.2;
  } else {
    step = 1
  }

  console.log(step);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
