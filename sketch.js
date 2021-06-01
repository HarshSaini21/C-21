var fixedRect, movRect;
var bounceRect1, bounceRect2;
var rect1, rect2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 300, 50, 50);
  fixedRect.shapeColor="blue";

  movRect = createSprite(380,200,50,50);
  movRect.shapeColor="blue";

  rect1 = createSprite(300, 300, 50, 50);
  rect1.shapeColor="blue";

  rect2 = createSprite(500, 300, 50, 50);
  rect2.shapeColor="blue";

  bounceRect1 = createSprite(250,200,50,50);
  bounceRect1.shapeColor = "yellow";
  bounceRect1.velocityX = 3;

  bounceRect2 = createSprite(450,200,50,50);
  bounceRect2.shapeColor = "yellow";
  bounceRect2.velocityX = -3;

  fixedRect.debug = true;
  movRect.debug = true;

  bounceRect1.debug = true;
  bounceRect2.debug = true;
}

function draw() {
  background("lightgreen");  

  movRect.x = mouseX;
  movRect.y = mouseY;
// collision detection

if (isTouching(movRect, rect1)) {
  rect1.shapeColor="yellow";
  movRect.shapeColor="yellow";
}
 
 else if (isTouching(movRect, rect2)) {
  rect2.shapeColor="red";
  movRect.shapeColor="red";
}
 else {
  rect1.shapeColor="blue";
  rect2.shapeColor="blue";
  movRect.shapeColor="blue";
 }




//bounce
bounce(bounceRect1, bounceRect2);


  drawSprites();
}

