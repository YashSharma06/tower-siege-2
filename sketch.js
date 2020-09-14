const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,poly;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground2 = new Ground(400,250,200,20);

  poly = Bodies.circle(100,150,25);
  World.add(world,poly);

  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);
  block6 = new Box(360,195,30,40);
  block7 = new Box(390,195,30,40);
  block8 = new Box(420,195,30,40);
  block9 = new Box(390,155,30,40);

  slingshot1 = new SlingShot(poly,{x:100,y:150})
}

function draw() {
  background("pink");  
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(poly.position.x,poly.position.y,25,25);

  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  slingshot1.display();
}

function mouseDragged(){
 Matter.Body.setPosition(poly,{x:mouseX,y:mouseY});
}

function mouseReleased(){
 slingshot1.fly();
}

function keyPressed(){
  Matter.Body.setPosition(poly, {x:  100, y: 150});
  if(keyCode === 32){
    slingshot1.attach(poly);
  }
}