var box = document.querySelector('#box');
var x, y;

function move() {
  // Objet TweenMax, on utilise la fonction .to(objet_séléctioné, temps en s. {propriétés à modifié de l'objet sélectioné})
  TweenMax.to(box, 1, {
    //Math.floor() permet d'arrondir à la valeur sans virgule
    left: Math.floor(Math.random() * 350) + 'px',
    top: Math.floor(Math.random() * 400) + 'px',
    ease: Power3.easeOut,
    // ease: Back.easeOut
    onComplete: grow
  })

  TweenMax.to(box, .7, {
    // delay: .7, // rajouter du delay
    height: '120px',
    width: '120px'
  })
}

function grow() {
  TweenMax.to(box, .5, {
    height: window.innerHeight + 'px',
    width: window.innerWidth + 'px'
  })
}

document.body.addEventListener('click', move);
