var colors = [
  '#6B0C22', // DarkRed
  '#D9042B', // Red
  '#588C8C', // Blue
  '#011C26'  // DarkBlue
];
var couleur;

var params = {
  width: 0,
  x: 100,
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  couleur = random(colors);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background('#F5D8A2');

  fill(couleur);
  rect(params.x, height/2-100, params.width, 200); // centrer le rectangle comme avec le transform translate en CSS
  
}

function mousePressed(){
  couleur = random(colors);

  TweenMax.fromTo(params, .1,
  {
    x: 100,
    width: 0
  },
  {
    width: width-200,
    onComplete: reduce
  });
}

function reduce(){
  TweenMax.to(params, .1, {
    x: width-100,
    width: 0
  })
}
