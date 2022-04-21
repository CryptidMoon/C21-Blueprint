
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball,ground1
var ball2,ground2
var ground3
var ground4
var button1
var button2

function setup()
{
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  
  var ball_options={
    restitution:1
  }
  ground1=new Ground(200,9,402,20)
  ground2=new Ground(200,390,402,20)
  ground3=new Ground(390,190,20,400)
  ground4=new Ground(10,200,20,400)
  ball=Bodies.circle(100,10,20,ball_options)
  ball2=Bodies.circle(150,30,20,ball_options)
  World.add(world,ball)
  World.add(world,ball2)

  button1=createImg("right.png")
  button1.position(220,30)
  button1.size(50,50)
  button1.mouseClicked(Hforce)

  button2=createImg("up.png")
  button2.position(20,30)
  button2.size(50,50)
  button2.mouseClicked(VForce)
}

function draw() 
{
  background(51);
  Engine.update(engine)
  ellipseMode(RADIUS)
  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ellipse(ball.position.x,ball.position.y,20,20)
  ellipse(ball2.position.x,ball2.position.y,20,20)
}
function Hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function VForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}