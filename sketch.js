var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400)
  speed=Math.round(random(45,90));
  weight=Math.round(random(1500,3000));
  wall = createSprite(1500,200,60,height/2);
  car = createSprite(50,200,50,50);
}

function draw() {
  background(0,0,0); 
  
  car.shapeColor = "white";
  car.velocityX = speed;

  if(wall.x - car.x<car.width/2+wall.width/2){
    car.velocityX = 0;
    deformation = (0.5*weight*speed*speed)/22500;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation>100&&deformation<180){
      car.shapeColor = color(255,255,0);
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}