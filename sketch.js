var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  bgSong = loadSound("aladdin theme song 1.mp3");
}

function setup() {
  var canvas =createCanvas(windowWidth,windowHeight);
  system = new System()
  security = new Security()
  bgSong.play();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    strokeWeight(4);
    stroke("blue");
    fill("black");
    textSize(40);
    bgSong.play();
    text("👍❤️TREASURE UNLOCKED❤️👍",250, 200);

  }

  drawSprites()
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
