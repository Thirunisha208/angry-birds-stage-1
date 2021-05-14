const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,420,70,70);
    box2 = new Box(800,420,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(700,430,50,50);
    log1 = new Log(700,370,300,PI/2) //angle will be given in radians pi=180 deg
    box3 = new Box(600,290,70,70);
    box4 = new Box(800,290,70,70);
    pig2= new Pig(700,300,50,50)
    log2 = new Log(700,230,300,PI/2);
    box5= new Box(700,150,70,70)
    log3 = new Log(660,140,150,PI/7);
    log4 = new Log(770,140,150,-PI/7);
    


}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    
}