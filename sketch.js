const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var ball;
var chains;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,400,50,100);
    box2 = new Box(1000,300,50,100);
    box3 = new Box(1000,500,50,100);
    box4 = new Box(1000,600,50,100);
    box5 = new Box(1000,700,50,100);


    ball = new Ball(400,200,40);
    ground = new Ground(600,height,1200,20)

    chains = new Chain(ball.body,{x:200, y:200})


}

function draw(){
    background("white");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    ball.display();
    chains.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
    chains.fly();

}
