var pc, pc_running;
var ground, invisibleGround, groundImage; 

function preload() {
  pc_running = loadAnimation("2.png", "3.png", "4.png");
  groundImage = loadImage("1.png");
}

function setup() {
  createCanvas(600, 200);

  pc = createSprite(50, 160, 20, 50);
  pc.addAnimation("running", pc_running);
  pc.scale = 0.5;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;
  
  invisibleGround=createSprite(200,190,400,10);
  invisibleGround.visible=false;
}

function draw() {
  background(220);

  if (keyDown("space")&&trex.y>160) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.collide( invisibleGround);
  drawSprites();
}
