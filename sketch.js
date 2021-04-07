const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 var engine,world;
 var ground;
 var ball;


 function setup() { var canvas = createCanvas(400,400);
  engine = Engine.create();
   world = engine.world;
    var ground_options = { isStatic:true }
     ground = Bodies.rectangle(200,390,200,20,ground_options) 
     var ball_options = { restitution:1.0 }
     ball = Bodies.circle(200,100,20,ball_options)
     World.add(world,ball);
     World.add(world,ground); } 

     function draw() { background(0); 
      Engine.update(engine); 
      ellipseMode(RADIUS);
      ellipse(ball.position.x,ball.position.y,20,20);
      rect(ground.position.x,ground.position.y,50,50);
       rectMode(CENTER) 
       rect(200,200,50,50) }
