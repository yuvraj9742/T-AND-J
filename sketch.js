var bg;
var tom, tomImg1,tomImg2,tomImg3;
var jerry, jerryImg1,jerryImg2,jerryImg3;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    tomImg1=loadImage("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png", "images/tomThree.png");
    tomImg3=loadAnimation("images/tomFour.png");
    jerryImg1=loadImage("images/jerryOne.png");
    jerryImg2=loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600);
tom.addImage( tomImg1);
tom.scale=0.2;
jerry=createSprite(600,400);
jerry.addImage( jerryImg1);
jerry.scale=0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

 // For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
   tom.velocityX=-5;
    tom.addAnimation("tomRunning", tomImg2);
    tom.changeAnimation("tomRunning");
    jerry.velocityX=-5;
   jerry.addAnimation("jerryRunning", jerryImg1)
    jerry.changeAnimation("jerryRunning")
}

}
