
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyimg;


function preload()
{
boyimg = loadImage("pics/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy = createSprite(250,500,50,50)
  boy.addImage(boyimg)
  boy.scale = 0.1;

  
  drawSprites();
 
}



