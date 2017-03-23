var data = [];

for (var i = 0; i < 50; i++) {
  data.push(50 + Math.random() * 150);
}

for (i = 0; i < data.length; i++){
  console.log(data[i]);

// Barres
  var div = document.createElement('div');
  div.style.height = '20px';
  div.style.background = '#252525';
  div.style.marginBottom = '5px';
  div.style.width = data[i] + 'px';

// Text
  var p = document.createElement('p');
  p.style.color = 'white';
  p.style.fontSize = '.6em';
  p.style.fontFamily = 'OpenSans-Light';
  p.style.lineHeight = '20px';
  p.style.paddingLeft = '3px';
  p.style.letterSpacing = '.5px';
  p.innerText = data[i];
  // Pour affiché que 2 chiffres après la virgules
  // p.innerText = Math.floor( data[i] * 100 )/100;

  div.appendChild(p);
  document.body.appendChild(div);
}
