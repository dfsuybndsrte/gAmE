var ig
var p
var obstacle
var og


function preload(){

}

function setup(){
 createCanvas(windowWidth,windowHeight);

 og=new Group()
 
 ig = createSprite(650,600,1270,10);
 p = createSprite(100,150,20,20);
 
 //ig.visible = false;


}

function draw(){
 background(220);

 if(keyDown("UP_ARROW") && p.y >= 550) {
  p.velocityY = -12;
 }
  p.velocityY = p.velocityY + 0.8

 if (ig.x < 0){
  ig.x = ig.width/2;
 }

 if (ig.x < 0){
  ground.x = ground.width/2;
 }
 
 move();
 pw();
 
 p.collide(ig);
  
 p.bounceOff(obstacle);
 
 drawSprites();
}

function move(){

  if(keyDown("RIGHT_ARROW")) {
    p.velocityX = 2;
   }
   if(keyDown("LEFT_ARROW")) {
    p.velocityX = -2;
   }
   
}

function pw(){

  if(frameCount % 10 === 0) {
    var obstacle = createSprite(1500,Math.round(random(700,600)),200,400);
    //obstacle.debug = true;
    obstacle.velocityX = -7
    
          obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //og.add(obstacle);
  }
}




