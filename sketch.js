
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1, paper1,ground1;	
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin1=new dustbin(1000,550);
	paper1=new paper(50,450,40);
	ground1=new ground(width/2,570,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin1.display();
  paper1.display();
  ground1.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
    
  	}
}





