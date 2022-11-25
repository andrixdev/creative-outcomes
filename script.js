//balise canva
let myCanvas

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')

//création planetes

//Soleil
ctx.strokeStyle= "#fecb31"
ctx.fillStyle= "#fecb31"
ctx.beginPath ()
ctx.arc (170, 300, 160, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Mercure
ctx.strokeStyle= "#af7a44"
ctx.fillStyle= "#af7a44"
ctx.beginPath ()
ctx.arc (380, 300, 10, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Venus
ctx.strokeStyle= "#ab4302"
ctx.fillStyle= "#ab4302"
ctx.beginPath ()
ctx.arc (450, 300, 20, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Terre
ctx.strokeStyle= "#1797bd"
ctx.fillStyle= "#1797bd"
ctx.beginPath ()
ctx.arc (550, 300, 25, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Mars
ctx.strokeStyle= "#b22519"
ctx.fillStyle= "#b22519"
ctx.beginPath ()
ctx.arc (650, 300, 20, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Jupiter
ctx.strokeStyle= "#c6a062"
ctx.fillStyle= "#c6a062"
ctx.beginPath ()
ctx.arc (780, 300, 70, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Saturne
ctx.strokeStyle= "#9d8155"
ctx.fillStyle= "#9d8155"
ctx.beginPath ()
ctx.arc (920, 300, 50, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Uranus
ctx.strokeStyle= "#30b5b9"
ctx.fillStyle= "#30b5b9"
ctx.beginPath ()
ctx.arc (1100, 300, 30, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Neptune
ctx.strokeStyle= "#005eb3"
ctx.fillStyle= "#005eb3"
ctx.beginPath ()
ctx.arc (1240, 300, 30, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//creation etoiles

//couleur du contour de l'étoile
ctx.strokeStyle = "white"

//couleur de l'étoile
ctx.fillStyle = "white"

//epaisseur de l'etoile
ctx.lineWidth = 1

// boucles dessiner les étoiles
for (let i = 0; i < 100; i++) {
    ctx.beginPath()
    ctx.arc(100, i*269, 1, 0, 100 * Math.PI, false)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    }

for (let i = 0; i < 100; i++) {
    ctx.beginPath()
    ctx.arc(300, i*500, 1, 0, 100 * Math.PI, false)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    }
     
for (let i = 0; i < 10; i++) {
    ctx.beginPath()
    ctx.arc(500, i*180, 1, 0, 100 * Math.PI, false)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    }
    
for (let i = 0; i < 100; i++) {
    ctx.beginPath()
    ctx.arc(700, i*200, 1, 0, 100 * Math.PI, false)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    }

for (let i = 0; i < 100; i++) {
    ctx.beginPath()
    ctx.arc(900, i*300, 1, 0, 100 * Math.PI, false)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    }

for (let i = 0; i < 100; i++) {
    ctx.beginPath()
    ctx.arc(1100, i*150, 1, 0, 100 * Math.PI, false)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    }

for (let i = 0; i < 100; i++) {
    ctx.beginPath()
    ctx.arc(1250, i*300, 1, 0, 100 * Math.PI, false)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    }

//creation des gravitations

//couleur des gravitations
ctx.strokeStyle= "white"

//gravitations
for (let i= 0; i < 11; i++) {
  ctx.beginPath()
  ctx.lineWidth="1"
  ctx.arc(170, 300, i * 130, 0, 2 * Math.PI, false)
  ctx.stroke()
  ctx.closePath()
 }
