const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//creating variable of objects
 var backImg;
 var snow1,snow2;
 var player1,player1Img;
 var player2,player2Img;
 var ground;
 var snowImg, snowwImg;

//laoding images in preload function so we can use in game
function preload(){
  backImg=loadImage("snow1.jpg");
  player1Img=loadImage("player1.png");
  player2Img=loadImage("player2.png");
  snowImg= loadImage("snow4.webp");
  snowwImg=loadImage("snow5.webp")
}

//craeeting objecttsin setup function and loading its images
function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(500,height,1200,20);

  back=createSprite(500, 300, 50, 50);
  back.addImage("back",backImg)
  back.scale=2;

  player1=createSprite(300,515,50,50);
  player1.addImage("player1",player1Img);
  player1.scale=0.2

  player2=createSprite(500,492,50,50);
  player2.addImage("player", player2Img);
  player2.scale=0.1

}

//displaying object which we created
function draw() {
  background(0);  
  Engine.update(engine);

  drawSprites();

  ground.display();

  spawnSnow();
  spawnSnoww();
}

//creating objects, and spawning its to random
function spawnSnoww(){
  if (frameCount % 60 === 0){
    var snoww = createSprite(200,0,60,60);
    
    snoww.y = Math.round(random(200,0));
    snoww.addImage(snowwImg);
    snoww.scale=0.2
    
    snoww.velocityY = 6;
  }
}
//creating objects, and spawning its to random
function spawnSnow(){
  if (frameCount % 60 === 0){
    var snow = createSprite(600,0,60,60);
    
    snow.y = Math.round(random(600,0));
    snow.addImage(snowImg);
    snow.scale=0.2
    
    snow.velocityY = 6;
  }
}