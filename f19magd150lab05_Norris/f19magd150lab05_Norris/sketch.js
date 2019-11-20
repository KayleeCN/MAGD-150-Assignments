var rectX, rect, circleX, circleY;
var rectWidth, rectHeight, circleWidth;
var circleFill1, circleFill2;
var rectButton;
var theta, ballX, ballY, screenX, screenY;
var xspeed, yspeed;
var screenWidth, screenHeight;


function setup() {
  createCanvas(800, 800);
  rectX = 500;
  rectY = 530;
  rectWidth =100;
  rectHeight= 50
  circleX= 150;
  circleY= 555;
  circleWidth= 75;
  rectFill1= 255;
  rectFill2= 200;
  circleFill1= 0;
  circleFill2 = 100;
  screenWidth = 500;
  screenHeight = 400;
  screenX = 100;
  screenY = 111;
  rectButton = false;
  theta = 0; 
  ballX= random(screenX+10, (screenX+screenWidth));  
  ballY= random(screenY+10, (screenY+screenHeight));
  xspeed = 1;
  yspeed = 1;

  
}

function draw() {
  background(0);
  
push();
  noStroke();
  fill(150);
  rect(75, 100, 550, 500, 7);
pop();
    //outer rect^
  
push();
  stroke(3);
  fill(230);
  rect(screenX, screenY, screenWidth, screenHeight);
pop();
    //screen^
  

  //everything but the screen -- down
  
  push();
      //mouseover conditional for rect button
  if(mouseX > rectX && mouseX < rectX+rectWidth &&       mouseY > rectY && mouseY < rectY+rectHeight){
   fill(rectFill2);
  }else {
    fill(rectFill1);
  }
    rect(rectX, rectY, rectWidth, rectHeight);
      print(rectButton);
  pop();
  
push();
  fill(0);
  text("Or me!" , 530, 560);
pop();
  
  
  
  
  
  
  push();
    //mouseover conditional ellipse button
  if(dist(circleX, circleY, mouseX, mouseY) < (circleWidth)){
     fill(circleFill2);
}else {
  fill(circleFill1);
}
    ellipse(circleX, circleY, circleWidth);
  pop();


push();
   fill(0);
  text("Click me!" , 125, 555);
pop();
    //text for ellipse button
  
  
  
  
  
  
  //rect button 
  if(rectButton){
    stroke(3);
    fill(0);
    ellipse(ballX, ballY, 20, 20);
    ballX += xspeed;
    ballY += yspeed;
  }
  if(ballX-10 < screenX || ballX+10 >                   screenX+screenWidth){
    xspeed *= -1;
  }
  
  if(ballY-10 < screenY || ballY+10 > screenY+screenHeight);
    yspeed *= -1;
    
    
  } 

function mousePressed(){
  if(mouseX > rectX && mouseX < rectX+rectWidth &&         mouseY > rectY && mouseY < rectY+rectHeight){
    rectButton = !rectButton;
  }  
}