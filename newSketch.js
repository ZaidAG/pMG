const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var ground;
var myEngine, myWorld;

function setup() {
    createCanvas(1000,600);
    //createSprite(400, 200 ,50, 50);
    myEngine = Engine.create();
    myWorld = myEngine.world;
    Engine.run(myEngine);

    ground=new Ground(500,600,1000,40);
    platform1=new Ground(300,200,200,20);
    platform2=new Ground(600,100,200,40);
    boss1=new Boss(800,400,100,100);
    globby=new Glob(80,540,40);
    evilMinions1=new miniEvil(500,400,90,90);
    bow=new Inventory(20,540,20,20);
    sword=new Inventory(20,540,20,20);
    chickenLegGun=new Inventory(20,540,20,20);
    gun=new Inventory(20,540,20,20);
    obstacle1=new Obstacles(20,540,20,20);

}


function draw() {
    background(0);  

    ground.display();
    globby.display();
    evilMinions1.display();
    
  }
  function keyPressed(){
    if(keyCode===32){
     console.log("Hi");
    }
    if(keyCode===DOWN_ARROW){
      //image=loadImage();
    }
    if(keyCode===UP_ARROW){

    }
    if(keyCode===RIGHT_ARROW){

    }
    if(keyCode===LEFT_ARROW){

    }
  }