const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball
var ground
var sling 

function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	ground = new Ground(750,790,1500,50)
	ground2 = new Ground(750,165,900,30)

	ball = new Ball(400,0,50)
	ball2 = new Ball(600,300,50)
	ball3 = new Ball(700,300,50)
	ball4 = new Ball(800,300,50)
	ball5 = new Ball(900,300,50)
	ball6 = new Ball(1000,300,50)

	sling = new Slingshot(ball.body,{x: 500, y: 165})
	sling2 = new Slingshot(ball2.body,{x: 600, y: 165})
	sling3 = new Slingshot(ball3.body,{x: 700, y: 165})
	sling4 = new Slingshot(ball4.body,{x: 800, y: 165})
	sling5 = new Slingshot(ball5.body,{x: 900, y: 165})
	sling6 = new Slingshot(ball6.body,{x: 1000, y: 165})

	Engine.run(myEngine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  ground2.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  sling.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  sling6.display();

}

function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
	}


