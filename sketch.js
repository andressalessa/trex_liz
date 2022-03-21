var box;

function setup() {
  createCanvas(400, 400);

  box = createSprite(200,200);
  box.shapeColor = "red";
}

function draw() {
  background(220);

  drawSprites();
}