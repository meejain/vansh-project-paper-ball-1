
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1 = new Box(700,320,20,100);
	box2 = new Box(920,320,20,100);
	ball1 = new Ball(20,320,10);
	ground1 = new Ground(600,390,1200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);



  box1.display();
	box2.display();
	ground1.display();
	ball1.display();



	function keyPressed() {
		if (keyCode === UP_ARROW) {
			Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
		}
	}
  drawSprites();
 
}



