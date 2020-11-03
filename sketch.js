
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hide1;
var myEngine,myWorld;
var baby,babyimage;
var boy,boyimage;
var dustbin,dustbinimage;
var backgroundImage;



function preload()
{
	babyimage = loadImage("dg.png");

	boyimage = loadImage("boy.png");

	dustbinimage = loadImage("dustbiner.png");

	backgroundImage = loadImage("ty.PNG");

}

function setup() {
	createCanvas(1350, 650);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.

	ground = new Ground(675,600,1400,10)

	  box1 = new Box(1040,567,80,25);
	  box2 = new Box(990,520,25,130);
	  box3 = new Box(1090,520,25,130);

	  ball = new paper(200,500,40)

	  
	  dustbin = createSprite(1040,520,10,10)
	  dustbin.addAnimation("walking",dustbinimage);
	  dustbin.scale = 0.8;


	 baby = createSprite(1040,300,10,10);
	 baby.addAnimation("walking",babyimage);
	 baby.scale = 0.3;

	
	 
	 boy = createSprite(200,450,10,10);
	 boy.addAnimation("walking",boyimage);
	 boy.scale = 0.7;

    	Engine.run(myEngine);
  
}


function draw() {


	//keyPressed ();

	
	Engine.update(myEngine);
	rectMode(CENTER);


  background(backgroundImage);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();   
  drawSprites();
 
	
  


}

function keyPressed (){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80});

		Body.setStatic(ball, false); 

	}


}



