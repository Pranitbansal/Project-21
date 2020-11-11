var bullet,wall,thickness;

var speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20);
  wall=createSprite(1400,200,thickness,height/2);

  speed=random(223,321);
  thickness=random(22,83);
  bullet.velocityX=speed;
  weight=random(30,52);

}

function draw() {
  background("black");  
  

  if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness *thickness*thickness);
   if(damage>10) {
     wall.shapeColor=color(255,0,0);
    }
   if(damage<10) {
     wall.shapeColor=color(0,255,0);
   } 
  }

  drawSprites();
}

