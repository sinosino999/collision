var fR,mR;


function setup() {
  createCanvas(800,400);

  fR=createSprite(200,200,50,80);
  mR=createSprite(400,200,80,30);
  
  fR.debug=true;
  mR.debug=true;
}

function draw() {
  background("yellow");
  
  mR.x=World.mouseX;
  mR.y=World.mouseY;

  if(mR.x-fR.x<fR.width/2+mR.width/2 &&
    fR.x-mR.x<fR.width/2+mR.width/2 &&
    mR.y-fR.y<fR.height/2+mR.height/2 &&
    fR.y-mR.y<fR.height/2+mR.height/2){
    mR.shapeColor="red";
    fR.shapeColor="red";
  }else{
    mR.shapeColor="green";
    fR.shapeColor="green";
  }





  drawSprites();
}