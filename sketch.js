const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground,ball,box;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var groundOptions = {
    isStatic:true
  }

  var ballOptions = {
    restitution:1.0
  }

  ground = Bodies.rectangle(200,390,400,20,groundOptions);
  World.add(world,ground);

  ball = Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball);

  box = Bodies.rectangle(200,200,50,50,groundOptions);
  World.add(world,box);

}

function draw() {
  background(0);  

  Engine.update(engine);

rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y,20,20);

rectMode(CENTER);
rect(box.position.x,box.position.y,50,50);

}