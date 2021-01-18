const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var groundBelow,globby,evilMinions,evilMinions2,evilMinions3,evilMinions4,evilMinions5,evilMinions6,evilMinions7,evilMinions8,evilMinions9,evilMinions10,evilMinions11,evilMinions12,evilMinions16,strike,sword,gun,chickenLegGun
var evilMinions19,evilMinions20,evilMinions21,evilMinions22,evilMinions23,evilMinions24,evilMinions25,evilMinions26,boss1,boss2,boss3,boss4,mainBoss,evilMinions13,evilMinions14,evilMinions15,evilMinions17,evilMinions18,obstacle1
var bow,arrows,obstacle2,obstacle3

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200 ,50, 50);

  engine = Engine.create();
  world = engine.world;

  groundBelow=new Ground(700,680,900,40);
  globby=new Glob(80,540,40);
  evilMinions1=new miniEvil(400,200,20,20);
  obstacle1=new Obstacles(400,200,20,60);
  obstacle2=new Obstacles(400,200,20,60);
  obstacle3=new Obstacles(400,200,20,60);
  bow=createSprites(20,540,20,20)

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  groundBelow.display();
  globby.display();
  evilMinions1.display();
  drawSprites();
}
function isTouching(){
  if(strike.isTouching(evilMinions1)){
    evilMinions.destroy();
  }
}