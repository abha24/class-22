const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  
  Object = Bodies.rectangle(200,100,50,50);
  World.add(world,Object);

  console.log(Object);
}

function draw() {
  background(0); 
  rectMode(CENTER);
  rect(200, 200, 50, 50); 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}