var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
	bgImg = loadImage("images/starnight.png");
	sound = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

  engine = Engine.create();
	world = engine.world;

  //sound.play();

	fairy = createSprite(130, 520);
	fairy.velocityX=0;
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

fairy.velocityX=0;

star.x= starBody.position.x 
star.y= starBody.position.y 
  if( starBody.position.y>470 ) {
  Body.setStatic(starBody,true)

}
drawSprites();
}

function keyPressed() {
	if ( keyCode ==(RIGHT_ARROW) ){
		fairy.velocityX = 21
	}

if( keyCode== (LEFT_ARROW)){
			fairy.velocityX = -20
		}

			if( keyCode == DOWN_ARROW ) {
				Body.setStatic(starBody, false); 
}
}




