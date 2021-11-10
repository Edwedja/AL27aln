//namespace
const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, ground, box3, box4;
var pig1, pig2, box5;
var log1, log2, log3, log4;
var bird;
var backgroundImg;
var plataforma;
var constraintLog;

function preload(){
  backgroundImg = loadImage ("sprites/bg.png")
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create(); // criando o MEUU mecanismo;
  world = engine.world; // novo mundo 

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  ground = new Ground(600,390,1200,20);
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300,PI/2)

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,240);
  log2 = new Log(810,220,300,PI/2)

 box5= new Box(810,140,70,70);
  log3 = new Log(900,120,140,-PI/7)
  log4 = new Log(750,120,140,PI/7)

  bird = new Bird(100,100)

  plataforma = new Ground (150,305,300,150)
  constraintLog = new Log(200,170, 80, PI/2)

  var options = {
    bodyA: bird.body,
    bodyB: constraintLog.body,
    stiffness: 0.1,
    length: 10,
  }

  var restri = Constraint.create(options)
  World.add(world, restri)
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
 
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird.display();

  plataforma.display()
  constraintLog.display()

  strokeWeight(3)
  // line (x inicial, y inicial, x final, y final )
  line (bird.body.position.x,bird.body.position.y, constraintLog.body.position.x,constraintLog.body.position.y )
}


