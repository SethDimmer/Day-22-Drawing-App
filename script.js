// using Canvas Api to draw graphics or shapes on the canvas using javascript

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20
let color = 'black'

// x and y are the positioning of canvas of where i want to draw the circle
function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x,y,50,0, Math.PI * 2)
    ctx.fillStyle = color
}