var wall,speed,weight
function setup() {
  createCanvas(1500,400);
  speed=random(55,100)
  weight=Math.random(400,1500)
car=createSprite(50,350,50,50)
car.velocityX=speed
car.weight=weight
wall=createSprite(1500,200,60,400)
}
function draw() {
 background("black")
 var deformation=0.5*weight*speed*speed/22509
 if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0
if(deformation>180)
{
car.shapeColor=color(255,0,0)
}
if (deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,230)
}
if (deformation<100)
{
  car.shapeColor=color(0,225,0)
}
}
 drawSprites()
}
