var shark,bigSark
var orangeFish,blueFish
var boat,fastBoat
var net
var ocean
var orangeFishGroup,blueFishGroup
var chance=1
var gameState=1
var speedTime

function preload(){
  oceanImg=loadImage("images/oceanCrop.jpg");
  sharkImg=loadImage("images/shark.png");
  bigSharkImg=loadImage("images/bigShark.jpg");
  orangeFishImg=loadImage("images/orange fish.png");
  blueFishImg=loadImage("images/blue fish.png");
  boatImg=loadImage("images/boat.png");
  fastBoatImg=loadImage("images/fast boat.png");
  //netImg=loadImage("images/");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  shark = createSprite(200,600,10,10);
  shark.addImage(sharkImg);
  shark.scale=0.4

  orangeFishGroup=createGroup();
  blueFishGroup=createGroup();
}

function draw() {
  background(oceanImg); 
  //console.log(frameRate())

if(gameState===1){
  if(keyDown("W")&&shark.y>350){
    shark.y+=-5
  }
  if(keyDown("S")&&shark.y<750){
    shark.y+=5
  }
  if(keyDown("A")&&shark.x>50){
    shark.x+=-5
  }
  if(keyDown("D")&&shark.x<windowWidth-50){
    shark.x+=5
  }
}
if(gameState===2){
  speedTime=frameCount
  console.log(speedTime)

  if(keyDown("W")&&shark.y>350){
    shark.y+=-10
  }
  if(keyDown("S")&&shark.y<750){
    shark.y+=10
  }
  if(keyDown("A")&&shark.x>50){
    shark.x+=-10
  }
  if(keyDown("D")&&shark.x<windowWidth-50){
    shark.x+=10
  }

  if(frameCount===speedTime+300){
    gameState=1
  }
}

if(orangeFishGroup.isTouching(shark)){
  orangeFishGroup.destroyEach();
}
if(blueFishGroup.isTouching(shark)){
  blueFishGroup.destroyEach();
  gameState=2 
}
spawnOrangeFish()
  spawnBlueFish()

  drawSprites();
}

function spawnOrangeFish(){
  if(frameCount%120===0){
    orangeFish=createSprite(windowWidth,round(random(350,750)),10,10);
    orangeFish.addImage(orangeFishImg);
    orangeFish.scale=0.1
    orangeFish.velocityX=-3

    orangeFishGroup.add(orangeFish);
  }
}

function spawnBlueFish(){
  if(frameCount%240===0){
    chance=round(random(1,2))
    console.log(chance)
    if(chance===1){
    blueFish=createSprite(windowWidth,round(random(350,750)),10,10);
    blueFish.addImage(blueFishImg);
    blueFish.scale=0.2
    blueFish.velocityX=-3

    blueFishGroup.add(blueFish);
    }
  }
}