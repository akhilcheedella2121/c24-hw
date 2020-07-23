
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	
	Engine.run(engine);
  paper1 = new paper(20,20,200,300);
  bin1 = new bin(700,300,10,30);
  bin2 = new bin(710,300,50,5);
  bin3 = new bin(760,300,10,30);

}

function draw() {
  rectMode(CENTER);
  background(16,79,83);
  ground(400,800,300,40);
  if(keydown(UP_ARROW)){
paper1.velocitx = 3
paper1.velocityY = -4
  }
  paper1.display()
  bin1.diplay()
  bin2.diplay()
  bin3.diplay()
  drawSprites();
 
}



