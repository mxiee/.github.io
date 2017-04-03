var colors = [
  '#6B0C22', // DarkRed
  '#D9042B', // Red
  '#588C8C', // Blue
  '#F5D8A2'  // DarkBlue
];

var couleur;

var params = {
  width: 0,
  height: 0,
  strokeWeight: 0
}

var song;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noFill();
  couleur = random(colors);
}

function preload() {
  song = loadSound('bass.mp3');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background('#121B1E');

  stroke(couleur);
  strokeWeight(params.strokeWeight);
  ellipse(width/2, height/2, params.width);
}

// si le click est activé
function mousePressed(){
  couleur = random(colors);

  TweenMax.fromTo(params, .2, {
    strokeWeight: 50,
    width: 0,
  },
  {
    width: width-300,
    onComplete: reduceStroke
  });
}

function reduceStroke(){
  TweenMax.to(params, .3, {
    strokeWeight: 0
  })
}

// si la barre espace est activé
function keyTyped(){
  if(key === ' ' ){

      song.play();

      TweenMax.fromTo(params, .2, {
        strokeWeight: 50,
        width: 0,
      },
      {
        width: width-300,
        ease: Back.easeOut,
        onComplete: reduceStroke
      });
    }

    function reduceStroke(){
      TweenMax.to(params, .3, {
        strokeWeight: 0
      })
    }

}
