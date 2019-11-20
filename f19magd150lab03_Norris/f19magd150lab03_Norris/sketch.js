var x = 100 + 50.5;
var y = 75 - 25.5;

function setup() {
  // put setup code here
  createCanvas(500, 500);
  background('#B7CFF8');
}

function draw() {
  // put drawing code here

  push();
  
      var s = max(15.5, 486.5);
        print(s);
      var t = min(15.5, 486.5);
        print(t);
    
  	strokeWeight(0);
  	fill('#CFE8E7');
  			
  		ellipse(15.5, 10, x, x);
  			//top left
  		ellipse(486.5, 35, x, x);
  			//top right
  		ellipse(250, 100, x, x);
  			//top mid
  		ellipse(85, 225, x, x);
  			//mid left
  		ellipse(425, 265, x, x);
  			//mid right
  		ellipse(12.5, 450, x, x);
  			//bottom left
  		ellipse(375, 480, x, x);
  			//bottom right
  		ellipse(220, 350, x, x);
  			//bottom mid

  pop();
  push();
  
      constrain(0, y, 500);
  
  	strokeWeight(0);
  	fill('#F0FFF3');
  
      var u = 55 * 5
      var v = 800 / 2
  			
  		ellipse(50.5, 8, y, y);
  			//highlight top left
  		ellipse(499, 20, y, y);
  			//highlight top right
  		ellipse(u, 75, y, y);
  			//highlight top mid
  		ellipse(110, 200, y, y);
  			//highlight mid left
  		ellipse(456, 245, y, y);
  			//highlight mid right
  		ellipse(35, 425, y, y);
  			//highlight bottom left
  		ellipse(v, 450, y, y);
  			//highlight bottom right
  		ellipse(239, 320, y, y);
  			//highlight bottom mid

  pop();
  push();

  	strokeWeight(0);
  	fill('#CFE8E7');
  		rect(mouseX, mouseY, width = 10, height = 15);

  pop();


  
}