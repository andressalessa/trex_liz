var box;

function setup() {
  createCanvas(400, 400);

  box = createSprite(200, 200, 50, 50);
  box.shapeColor = "red";

}

function draw() {
  background("black");

  if (keyIsDown(UP_ARROW)) {
    box.y -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    box.y += 3;
  }
  
  drawSprites();
}