function setup() {
      createCanvas(600, 400);
      noStroke();
    }

    function draw() {
      background(255);

      noStroke();
      fill(45, 118, 185);
      arc(300, 420, 360, 200, PI, TWO_PI);

      fill(255, 218, 185);
      ellipse(140, 200, 30, 60);
      ellipse(460, 200, 30, 60);

      ellipse(300, 200, 320, 350);

      fill(20, 20, 20);
      arc(300, 150, 305, 260, PI, TWO_PI, CHORD);

      triangle(320, 150, 300, 150, 300, 170);
      triangle(340, 150, 320, 150, 320, 170);
      triangle(360, 150, 340, 150, 340, 170);

      fill(255, 179, 155);
      ellipse(200, 235, 65, 45);
      ellipse(400, 235, 65, 45);

      noFill();
      stroke(20, 20, 20);
      strokeWeight(7);
      strokeCap(ROUND);
      arc(240, 180, 60, 40, 0, PI);
      arc(360, 180, 60, 40, 0, PI);

      noStroke();
      fill(205, 155, 135);
      ellipse(300, 235, 7, 7);

      noFill();
      stroke(210, 70, 70);
      strokeWeight(7);
      strokeCap(ROUND);
      arc(300, 270, 80, 65, 0, PI);
    }