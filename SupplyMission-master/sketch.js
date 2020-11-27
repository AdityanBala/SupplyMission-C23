var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var DropZone1,DropZone2,DropZone3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    var packageBody_options = {
		restitution:0.75,
		density:1.5,
		isStatic:true 
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBody_options);
	World.add(world, packageBody);
	

	//Create Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	var DropZone_Options = {
		isStatic:true
	}

	DropZone1 = Bodies.rectangle(300,620,15,80,DropZone_Options);
	World.add(world, DropZone1);

    DropZone2 = Bodies.rectangle(400,650,100,15,DropZone_Options);
	World.add(world, DropZone2);

	DropZone3 = Bodies.rectangle(500,620,15,80,DropZone_Options);
	World.add(world, DropZone3);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine)

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  fill("red");

  rect(300,620,15,80);
  rect(500,620,15,80);
  rect(400,650,200,15);

  DropPackage();

  drawSprites();
}

function DropPackage() {
 if (keyWentDown(DOWN_ARROW)) {
    Matter.Body.setStatic(packageBody, false);

	console.log("drop");
  }
}