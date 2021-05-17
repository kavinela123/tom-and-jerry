var bgImg
var cat,catImg,cating1
var mouse,mouseImg,mousing1



function preload() {
    //load the images here
bgImg = loadImage("images/garden.png")
catImg = loadAnimation("images/cat1.png")
mouseImg = loadAnimation("images/mouse1.png")
mousing1 = loadAnimation("images/mouse2.png","images/mouse3.png")
cating1 = loadAnimation("images/cat2.png","images/cat3.png")
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
cat = createSprite(690,500)
cat.addAnimation("catStanding",catImg)
cat.scale = 0.2
cat.velocityX =- 4
mouse = createSprite(100,500)
mouse.addAnimation("mouseStanding",mouseImg)
mouse.scale = 0.2


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x <(cat.width - mouse.width)/2){
   cat.velocityX = 0
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mousing1)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25
}

}
