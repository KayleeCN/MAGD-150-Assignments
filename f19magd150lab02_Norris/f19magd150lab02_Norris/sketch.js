function setup() {
  // put setup code here
  createCanvas(800, 800);

}

function draw() {
  // put drawing code here

  	background(12, 57, 87, 34)

	{
		push();
   			strokeWeight(0);
   				fill(255)
   			ellipse(200, 200, 300, 300);
   		pop();
   		push();
   			strokeWeight(0);
   				fill(50);
   			ellipse(125, 100, 100, 100);
   		pop();
      
	}
	{
		push();
   			strokeWeight(0);
  			colorMode(HSB, 360, 100, 100);
   				fill(218, 60, 92)
   			arc(400, 400, 400, 400, PI, PI);
   		pop();
		push();
			strokeWeight(0);
			colorMode(HSB, 360, 100, 100);
				fill(218, 38, 92);
			ellipse(425, 375, 300, 300);
		pop();
		push();
			strokeWeight(0);
			colorMode(HSB, 360, 100, 100);
				fill(218, 16, 92)
			ellipse(450, 350, 200, 200);
		pop();

	}
	{
		push();
			strokeWeight(0);
				fill('#00FFC2');
			triangle(400, 1000, 700, 750, 100, 750);

		pop(); 

	}
	{
		push();
			strokeWeight(0);
				fill(0);
			beginShape(250, 250);
				vertex(275, 250);
				vertex(275, 300);
				vertex(250, 300);
				vertex(260, 280);
				vertex(260, 250);
				endShape(CLOSE);
		pop();
		push();
			strokeWeight(0);
				fill(0);
			ellipse(262.5, 245, 25, 25);
		pop();
		push();
			strokeWeight(2.5);
			line(273, 300, 262.5, 325);
			line(255, 300, 244.5, 325);
		pop();
		push();
			strokeWeight(0);
				fill(255);
			ellipse(256, 243, 5, 10);
			ellipse(265, 243, 5, 10);
		pop();

	}

}