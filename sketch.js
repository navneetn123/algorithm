var movingR,fixedR;

function setup() {
  createCanvas(1200,800);

movingR= createSprite(200, 400, 100, 40);
movingR.shapeColor="green";
movingR.debug=true;

fixedR=createSprite(400,400,40,100);
fixedR.shapeColor="green";
fixedR.debug=true;


  
}

function draw() {
  background(0,0,0);  
  
  movingR.x=World.mouseX;
  movingR.y=World.mouseY;

  //250-200<20+50

if(movingR.x-fixedR.x < fixedR.width/2+movingR.width/2 && 
  
  movingR.y-fixedR.y < fixedR.height/2+movingR.height/2&& 
  
  fixedR.x-movingR.x<fixedR.width/2+movingR.width/2&&

  fixedR.y-movingR.y < fixedR.height/2+movingR.height/2  ){


  movingR.shapeColor="blue";
  fixedR.shapeColor="blue";
}

else{
  movingR.shapeColor="green";
  fixedR.shapeColor="green";

}
 
  drawSprites();
}

