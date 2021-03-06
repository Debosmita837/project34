
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	//Create the Bodies Here.
	bob3 = new bob(400, 400, 25);
	bob2 = new bob(340, 400, 25);
	bob4 = new bob(460, 400, 25);
	bob5 = new bob(520, 400, 25);
	bob1 = new bob(280, 400, 25);
	roof = new roof(400, 200, 400, 20);
	rope1 = new rope(bob1.body, roof.body, -120, 0);
	rope2 = new rope(bob2.body, roof.body, -60, 0);
	rope3 = new rope(bob3.body, roof.body, 0, 0);
	rope4 = new rope(bob4.body, roof.body, 60, 0);
	rope5 = new rope(bob5.body, roof.body, 120, 0);

	Engine.run(engine);
  
}


function draw() {
  background(208);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
 
}

function mouseDragged(){
		Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY})
}


