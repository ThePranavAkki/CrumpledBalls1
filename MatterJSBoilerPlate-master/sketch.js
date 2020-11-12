
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, dustbin;
var engine, world;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world
	
	paper = new Paper(100, 660, 15);
	dustbin = new Dustbin();
	ground = new Ground(800, 690, 1600, 20);

	
}


function draw() {
	Engine.run(engine);

	background(0);

	paper.display();

	dustbin.display();

	ground.display();
}

function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 40, y: -40});
	}
}


