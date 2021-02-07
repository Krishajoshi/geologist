
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var engine,world;
var plane;
var stone;
var rubber;
var iron;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	plane = new Plane(600,height,1200,20);
	
	hammer1 = new Hammer(200,400,120,300);
	stone = new Stone(120,340)

	//rubber = new Rubber(200,560,130);

	iron = new Iron(340,260,100,130);


	Engine.run(engine);
	
  
}


function draw() {
  
  background("blue");
  

  hammer1.display();
  plane.display();
  stone.display();
  //rubber.display();
  iron.display();

  drawSprites();
 
}



