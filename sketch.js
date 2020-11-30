var fixedRect, movingRect,obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1=createSprite(400,400,40,40);
  obj2=createSprite(800,80,40,40);
  obj3=createSprite(800,500,40,40);
  obj4=createSprite(600,70,40,40);
obj2.debug=true;
obj3.debug=true;

  obj3.velocityY = -5;
  obj2.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(obj2,obj3);
  
  drawSprites();
}

