
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;

var ground,ground1,ground2,ground3;

var bird, slingshot;
var backgroundImg;

var gameState = "onSling";



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}



function setup(){
var canvas=createCanvas(1400,400);
engine = Engine.create();
world = engine.world;

box5= new Box(800,390,40,40);
box6= new Box(800,390,40,40);
box7= new Box(700,390,40,40);
box8 = new Box(725,390,40,40);
box9 = new Box(750,390,40,40);
box10 = new Box(715,370,40,40);
box11 = new Box(730,370,40,40);
box12 = new Box(720,330,40,40);
box13 = new Box(1005,390,40,40);
box14 = new Box(1025,390,40,40);
box15 = new Box(1050,390,40,40);
box16 = new Box(1025,370,40,40);
box17 = new Box(1030,370,40,40);
box18 = new Box(1020,330,40,40);

pig1=new Pig(770,390,40,40);
pig2=new Pig(690,390,30,30);
pig3=new Pig(810,390,20,20);
pig4=new Pig(995,390,30,30);
pig5=new Pig(1120,390,30,30);
pig6=new Pig(600,390,10,10);
pig7=new Pig(1150,390,30,30);

ground = new Ground(600,height,1800,20);
ground1 = new Ground(1030,height,240,60);
ground2 = new Ground(220,height,180,365);
ground3 = new Ground(750,height,320,60);

bird = new Bird(200,50);


 //log6 = new Log(230,180,80, PI/2);
 slingshot = new SlingShot(bird.body,{x:200, y:50});

}
function draw(){
    background(backgroundImg);
    Engine.update(engine);

    //strokeWeight(4);

    
   
  
    box5.display();
   box6.display();
    box7.display();
    box8.display();

    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();

    ground.display();
    ground1.display();
    ground2.display();
    ground3.display();

    bird.display();
    

   // log6.display();

   slingshot.display(); 

}

function mouseDragged(){
   // if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  //  }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed<1 ){

       slingshot.attach(bird.body);
       bird.trajectory=[];
       Matter.Body.setPosition(bird.body,{x:200,y:50});
    }
}
