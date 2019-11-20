var x1 = 300;
  var x2 = 350;
  var x3 = 200;
  var x4 = 375;
  var x5 = 225;
  var x6 = 300;

  var y1 = 300;
  var y2 = 400;
  var y3 = 200;
  var y4 = 275;
  var y5 = 350;
  var y6 = 175;

  var z = 300;

function setup() {
  // put setup code here
  createCanvas(600, 600);
    background('#FFAE91');
 
}
 

function draw() {
  // put drawing code here

push();
  background('#FFAE91');
  noStroke();
  fill('#FFCD6C');
  ellipse(x1, y1, 400, 400);
pop();

push();
  x = 50;
    z = z + 1;
 
  noStroke();
  fill('#F3545A');
  ellipse(x2, y2, x, x);
  //bottom left
  ellipse(x3, y3, x, x);
  //top left
  ellipse(x4, y4, x, x);
  //top right
  ellipse(x5, y5, x, x);
  //bottom right
  ellipse(x6, y6, x, x);
  //top
            ellipse(z, z, x, x);
pop();
 
  loop();

}

function keyPressed() {
   if (key == 'a') {
    x1 = x1 - 10;
     
  } else {}

  if (key == 'a') {
    x2 = x2 - 10;
   
  } else {}
 
  if (key == 'a') {
    x3 = x3 - 10;
   
  } else {}
 
  if (key == 'a') {
    x4 = x4 - 10;
 
  } else {}
 
  if (key == 'a') {
    x5 = x5 - 10;
   
  } else {}
 
  if (key == 'a') {
    x6 = x6 - 10;
   
  } else {}
 
    redraw();
 
}

function mousePressed() {
   if (mouseButton == LEFT) {
    x1 = x1 + 10;
     
  } else {
  y1 = y1 + 10
  }

  if (mouseButton == LEFT) {
    x2 = x2 + 10;
   
  } else {
  y2 = y2 + 10
  }
 
  if (mouseButton == LEFT) {
    x3 = x3 + 10;
   
  } else {
  y3 = y3 + 10
  }
 
  if (mouseButton == LEFT) {
    x4 = x4 + 10;
 
  } else {
  y4 = y4 + 10
  }
 
  if (mouseButton == LEFT) {
    x5 = x5 + 10;
   
  } else {
  y5 = y5 + 10
  }
 
  if (mouseButton == LEFT) {
    x6 = x6 + 10;
   
  } else {
  y6 = y6 + 10
  }
 
    redraw();
}





