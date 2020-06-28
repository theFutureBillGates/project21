var wall,bullet;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);

  //speed = random(55,90);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  
  bullet = createSprite(20,200,50,35);
  bullet.shapeColor = color(255,255,255)
  bullet.velocityX = speed;
 
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0);  
  
  bullet.collide(wall);
  
  if(bullet.x >= wall.x-70) {
    var damage = 0.5*weight*speed*speed/(wall.width*wall.width*wall.width)
    
    if(damage<=10){
      bullet.shapeColor = color(0,255,0);
    }

    if(damage>10){
      bullet.shapeColor = color(255,0,0);
    } 
  }

  drawSprites();
}