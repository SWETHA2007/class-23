const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var myengine ,myworld;
var ground;
var box1,box2,grround;

function setup(){
  var canvas=createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  
 box1 = new Box(200,200,50,50)
box2=new Box(220,100,50,50)
 ground=new Ground(200,390,400,20) 
 
}
function draw()
{
  background(0);
  Engine.update(myengine);


  

  box1.display();
 box2.display();
ground.display();
  
}
