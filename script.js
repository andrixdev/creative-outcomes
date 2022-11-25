let myCanvas
myCanvas = document.
getElementsByTagName('canvas')[0]

myCanvas.width = 700;
myCanvas.height = 700;

let ctx = myCanvas.getContext('2d')

ctx.strokeStyle = "white"
ctx.linewidth = 1

var gradient = ctx.createLinearGradient(350, 350, 350, 0);
gradient.addColorStop(0, '#FF24C1');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;

// coté droit du carré = LAURA

// triangle haut
ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(350, 0);
    ctx.lineTo(430, 80);
    ctx.fill();
    ctx.closePath;


// triangle bas
//le style de remplissage
    var gradient = ctx.createLinearGradient(350, 350, 350, 700);
gradient.addColorStop(0, '#FF24C1');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;
// la forme
ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(350, 700);
    ctx.lineTo(430, 620);
    ctx.fill();
    ctx.closePath;


// triangle du milieu (bas)

// le style de remplissage
var gradient = ctx.createLinearGradient(350, 350, 700, 350);
gradient.addColorStop(0, '#FF24C1');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;
// la forme
ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(700, 350);
    ctx.lineTo(620, 430);
    ctx.fill();
    ctx.closePath;

// triangle du milieu (haut)

// le style de remplissage 
var gradient = ctx.createLinearGradient(350, 350, 700, 350);
gradient.addColorStop(0, '#FF24C1');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;

// la forme
    ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(700, 350);
    ctx.lineTo(620, 270);
    ctx.fill();
    ctx.closePath;

// trait 1 
ctx.beginPath();
ctx.moveTo(430,80);
ctx.lineTo(620, 270);
ctx.stroke();
ctx.closePath;

// trait perpandiculaire au 1
ctx.beginPath();
ctx.moveTo(350,350);
ctx.lineTo(525, 175);
ctx.stroke();
ctx.closePath;

//trait 2
ctx.beginPath();
ctx.moveTo(430, 620);
ctx.lineTo(620, 430);
ctx.stroke();
ctx.closePath;

// trait perdendiculaire au 2
ctx.beginPath();
ctx.moveTo(350,350);
ctx.lineTo(525, 525);
ctx.stroke();
ctx.closePath;