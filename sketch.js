//Create variables here
var dog 
var happyDog 
var database
var foodS
var foodStock

function preload()
{
  //load images here
  dog = loadImage("../images/dogImg.png")
  happydog = loadImage("../images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
dog = createSprite(400,400,20,20);
dog.addImage("dog",dog_img);

happy dog = createSprite(400,400,20,20);
happy dog.addImage("happydog",dog1_img);

foodStock=database.ref('food')
foodStock.on("value",readStock)
}


function draw() {  
background(49,139,87)
  drawSprites();
  //add styles here

}



