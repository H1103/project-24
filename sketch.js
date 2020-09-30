const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin, ball;
var ground;

function preload()
{

}

function setup(){
	createCanvas(1350,550);
	 engine = Engine.create();
	 world = engine.world;
	 
	 ball = new Ball(75,300);
	 ground = new Ground(600,530,1400,20);

	 
	 bin1 = new Bin(1140,510,140,20);
	 bin2 = new Bin(1080,480,20,70);
	 bin3 = new Bin(1200,480,20,70);


	 //create the bodies here


	 Engine.run(engine);
}


function draw(){
	background(0);
	rectMode(CENTER);
	ball.display();
	ground.display();
	bin1.display();
	bin2.display();
	bin3.display();

	drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball.Body,ball.body.position,{x:85,y:-85});
	}
}