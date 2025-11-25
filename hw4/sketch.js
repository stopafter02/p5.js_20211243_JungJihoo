function setup() {
  createCanvas(600, 400);
  frameRate(30); 
  pixelDensity(1);

  rectMode(CENTER);
  stroke(0);
  strokeWeight(2);
  colorMode(RGB);
}
function draw() {
  background(240);
  let t = millis() / 1000.0;
  let yMove = sin(t * 2) * 10;
  let sChange = cos(t * 3) * 10;
  let amt = (sin(t * 1.5) + 1) / 2;

  let colorRed = color(255, 100, 100);
  let colorBlue = color(100, 100, 255);
  let colorGreen = color(100, 255, 100);

  let dynamicColor1 = lerpColor(colorRed, colorBlue, amt);
  let dynamicColor2 = lerpColor(colorGreen, color(255, 255, 100), amt);

  fill(dynamicColor1);
  circle(75, 67 + yMove, 107 + sChange);

  fill(dynamicColor2);
  rect(75, 67 + yMove, 76 + sChange, 76 + sChange);

  fill(colorBlue);
  triangle(75, 29 + yMove, 31, 105 + yMove, 119, 105 + yMove);

  fill(dynamicColor2);
  rect(225, 67 + yMove, 107 + sChange, 107 + sChange);

  fill(colorBlue);
  triangle(225, 14 + yMove, 163, 120 + yMove, 287, 120 + yMove);

  fill(dynamicColor1);
  circle(225, 94 + yMove, 54 + sChange);

  fill(colorBlue);
  triangle(375, 14 + yMove, 313, 120 + yMove, 437, 120 + yMove);

  fill(dynamicColor1);
  circle(375, 94 + yMove, 54 + sChange);

  fill(dynamicColor2);
  rect(375, 94 + yMove, 38 + sChange, 38 + sChange);

  fill(dynamicColor1);
  circle(525, 67 + yMove, 107 + sChange);

  fill(dynamicColor2);
  rect(525, 67 + yMove, 76 + sChange, 76 + sChange);

  fill(colorBlue);
  triangle(525, 29 + yMove, 481, 105 + yMove, 569, 105 + yMove);

  let yMove2 = -yMove;

  fill(dynamicColor2);
  rect(75, 200 + yMove2, 107 + sChange, 107 + sChange);

  fill(colorBlue);
  triangle(75, 147 + yMove2, 13, 253 + yMove2, 137, 253 + yMove2);

  fill(dynamicColor1);
  circle(75, 227 + yMove2, 54 + sChange);

  fill(colorBlue);
  triangle(225, 147 + yMove2, 163, 253 + yMove2, 287, 253 + yMove2);

  fill(dynamicColor1);
  circle(225, 227 + yMove2, 54 + sChange);

  fill(dynamicColor2);
  rect(225, 227 + yMove2, 38 + sChange, 38 + sChange);

  fill(dynamicColor1);
  circle(375, 200 + yMove2, 107 + sChange);

  fill(dynamicColor2);
  rect(375, 200 + yMove2, 76 + sChange, 76 + sChange);

  fill(colorBlue);
  triangle(375, 162 + yMove2, 331, 238 + yMove2, 419, 238 + yMove2);

  fill(dynamicColor2);
  rect(525, 200 + yMove2, 107 + sChange, 107 + sChange);

  fill(colorBlue);
  triangle(525, 147 + yMove2, 463, 253 + yMove2, 587, 253 + yMove2);

  fill(dynamicColor1);
  circle(525, 227 + yMove2, 54 + sChange);

  fill(colorBlue);
  triangle(75, 280 + yMove, 13, 386 + yMove, 137, 386 + yMove);

  fill(dynamicColor1);
  circle(75, 360 + yMove, 54 + sChange);

  fill(dynamicColor2);
  rect(75, 360 + yMove, 38 + sChange, 38 + sChange);

  fill(dynamicColor1);
  circle(225, 333 + yMove, 107 + sChange);

  fill(dynamicColor2);
  rect(225, 333 + yMove, 76 + sChange, 76 + sChange);

  fill(colorBlue);
  triangle(225, 295 + yMove, 181, 371 + yMove, 269, 371 + yMove);

  fill(dynamicColor2);
  rect(375, 333 + yMove, 107 + sChange, 107 + sChange);

  fill(colorBlue);
  triangle(375, 280 + yMove, 313, 386 + yMove, 437, 386 + yMove);

  fill(dynamicColor1);
  circle(375, 360 + yMove, 54 + sChange);

  fill(colorBlue);
  triangle(525, 280 + yMove, 463, 386 + yMove, 587, 386 + yMove);

  fill(dynamicColor1);
  circle(525, 360 + yMove, 54 + sChange);

  fill(dynamicColor2);
  rect(525, 360 + yMove, 38 + sChange, 38 + sChange);
}