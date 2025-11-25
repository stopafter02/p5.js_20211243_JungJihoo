let prevX = 0;
let prevY = 0;
function setup() 
{
  createCanvas(600, 400);
  hairColor = color(0);
}

function keyPressed() 
{
  if (key === 'r' || key === 'R') 
  {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    hairColor = color(r, g, b); 
  }
  if (key === 's') 
  {
    saveGif('mySketch', 10);
  }
}
function draw() 
{
  background('#171036')
  translate(300, 200);

  //얼굴
  stroke(50);
  strokeWeight(2);
  fill(255, 220, 185);
  ellipse(0, 0, 240, 290);

  //눈
  fill(255);
  noStroke();
  ellipse(60,-26,50,16) ;
  ellipse(-60,-26,50,16);
  stroke(2);
  arc(60,-26,50,16,PI,0.1);
  arc(-60,-26,50,16,PI-0.1,0);
  fill(0);
  circle(60,-26,16);
  circle(-60,-26,16);
  
  //눈썹 
  noFill();
  strokeWeight(7);
  arc(60,-40,50,10,PI,0);
  arc(-60,-40,50,10,PI,0);
  //코
  strokeWeight(2);
  line(0,0,-10,30);
  line(-10,30,0,35);

  //입
  fill('#FF3232');
  arc(0,75,50,20,0,PI,CHORD);
  //머리카락
  fill(hairColor);
  arc(0,-50,250,250,PI,0);
  noStroke();
  fill(255, 220, 185);
  triangle(30,-50,50,-50,30,-80);
  triangle(0,-50,20,-50,0,-80);
  //손
  fill(hairColor)
  translate(-300,-200);
  let diam = 3*dist(mouseX, mouseY, prevX, prevY)+30;
  ellipse(mouseX,mouseY, diam, diam);
  translate(300, 200); 
 
  if(mouseIsPressed)
  {
    
    fill(255, 220, 185)
    stroke(255, 220, 185)
    ellipse(60,-26,50,16);
    ellipse(-60,-26,50,16) 
    stroke(2);
    noFill()
    arc(60,-26,50,16,0,PI); 
    arc(-60,-26,50,16,0,PI); 
    fill('#FF3232')
    ellipse(0,95,30,40)
  }


  prevX = mouseX;
  prevY = mouseY;
    
}