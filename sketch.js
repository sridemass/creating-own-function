var fixedRect,fixedRect2,fixedRect3,fixedRect4,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  fixedRect2 = createSprite(100,150,50,80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;

  fixedRect3 = createSprite(600,150,50,80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;

  fixedRect4 = createSprite(1100,150,50,80);
  fixedRect4.shapeColor = "green";
  fixedRect4.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect2,movingRect)){
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red";

  }
  

 else if(isTouching(fixedRect3,movingRect)){
    movingRect.shapeColor = "red";
    fixedRect3.shapeColor = "red";


  }
  else {
    movingRect.shapeColor = "green";
    fixedRect3.shapeColor = "green";
    fixedRect2.shapeColor = "green";
  }

  
  drawSprites();
}
function isTouching(obj,obj2){
  if (obj.x - obj2.x < obj2.width/2 + obj.width/2
    && obj2.x - obj.x < obj2.width/2 + obj.width/2
    && obj.y - obj2.y < obj2.height/2 + obj.height/2
    && obj2.y - obj.y < obj2.height/2 + obj.height/2) {
 return true; 
}
else {
return false;
}
}