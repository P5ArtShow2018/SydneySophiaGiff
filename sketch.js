var gif;
var sound;

function preload() {
    sound = loadSound("NFW.mp3")
}

function setup() {
  createCanvas(1000,1000);
  background(243,8,49)
  gif = loadGif("sydney&sophia.gif");
  sound.play();

}


function draw() {
  imageMode(CENTER, CENTER)
  image(gif, mouseX, mouseY);
}