var theHero, theHeroImage;
var baseGround, baseGroundImage;
var upperGround, upperGroundImage;
var Fbackground; FbackgroundImage;
var score = 0;
var theHeroHurtImage;

var restart,restartImage;
var gameOver, gameOverImage;

var PLAY = 1;
var END = 0;
var gameState = PLAY;



var obstacle1 ;
var obstacle2 ;
var obstacle3 ;
var obstacle4 ;
var obstacle5 ;
var obstacleGroup ;
var obstacles ;

function preload(){
  obstacle1 = loadImage('Images/RockMonster.png');
  obstacle2 = loadImage('Images/Rock2.png');
  obstacle3 = loadImage('Images/Tree.png');
  obstacle4 = loadImage('Images/OILSpill.png');
  obstacle5 = loadImage('Images/OilDrum.png');
  FbackgroundImage = loadImage('images/BackGroundReal1.jpg');
  theHeroImage = loadAnimation('Images/Running1.png','Images/Running2.png','Images/Running3.png','Images/Running4.png','Images/Running5.png');
  theHeroHurtImage = loadAnimation('Images/heroHurt.png');
  restartImage = loadImage('Images/restart.png');
  gameOverImage = loadImage('Images/gameOver.png');
}

function setup() {
  createCanvas(1200,500);

theHero = createSprite(50,460,30,30);
theHero.addAnimation('character',theHeroImage);
theHero.scale = 1.5;
theHero.addAnimation('hurt',theHeroHurtImage);
restart = createSprite(600,210);
restart.addImage('re',restartImage);
gameOver = createSprite(600,260);
gameOver.addImage('go',gameOverImage);

obstaclesGroup = new Group();

Fbackground = createSprite();
//Fbackground.addImage(FbackgroundImage);
//Fbackground.velocityX = -5;

Fbackground.x = Fbackground.width/2;

baseGround = createSprite(400,500,2000,10);
baseGround.velocityX = -7;
baseGround.x = baseGround.width/2;

score = 0;

}

function draw() {
  background(FbackgroundImage);  
  
  text("Score: " + score, 985,50)

 if(gameState === PLAY){
 score = score + Math.round(getFrameRate()/150);

 gameOver.visible = false;
 restart.visible = false;

 if(keyDown('space')&& theHero.y >= 375){
  theHero.velocityY = -7
}
theHero.velocityY = theHero.velocityY + 0.3
theHero.collide(baseGround);

if (baseGround.x < 0){
  baseGround.x = baseGround.width/2;
}
if (Fbackground.x < 0){
  Fbackground.x = Fbackground.width/2;
}
if(obstaclesGroup.isTouching(theHero)){
  baseGround.velocityX = 0;
  theHero.velocityX = 0;
  obstaclesGroup.setVelocityXEach(0);
  theHero.changeAnimation('hurt',theHeroHurtImage);
  gameState = END ;
}
spawnObstacles();
 }

else if(gameState === END){
  //gameover and restart//
  baseGround.velocityX = 0;
  theHero.velocityX = 0;
  obstaclesGroup.setVelocityXEach(0);
  theHero.changeAnimation('hurt',theHeroHurtImage);
  obstaclesGroup.setLifetimeEach(-1);
  
  gameOver.visible = true;
  restart.visible = true;
  
  if(mousePressedOver(restart)){
    reset()
  }
}



  drawSprites();
}

function reset(){
  gameState = PLAY;
  baseGround.velocityX = -7;
  obstaclesGroup.destroyEach();
  theHero.changeAnimation('character',theHeroImage);
  score = 0;
}

