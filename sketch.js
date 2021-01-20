var fixedRect,movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;
var bounce1,bounce2
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 100);
  movingRect=createSprite(500,200,100,50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  gameobject1=createSprite(10,200,50,50);
  gameobject1.shapeColor="green";
  gameobject2=createSprite(100,200,50,50);
  gameobject2.shapeColor="green";
  gameobject3=createSprite(200,200,50,50);
  gameobject3.shapeColor="green";
  gameobject4=createSprite(300,200,50,50);
  gameobject4.shapeColor="green";
  bounce1=createSprite(600,200,100,50);
  bounce1.shapeColor="green";
  bounce1.velocityY=1;
  bounce2=createSprite(600,700,50,100);
  bounce2.shapeColor="green";
  bounce2.velocityY=-1;
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;
console.log(movingRect.y);
console.log(movingRect.y-fixedRect.y);

if(isTouching(movingRect,gameobject1)){
  movingRect.shapeColor="red";
  gameobject1.shapeColor="red";
}
else{
  gameobject1.shapeColor="green";
  movingRect.shapeColor="green";
}
  
bounceoff(bounce1,bounce2);
  drawSprites();
}

