// using Canvas Api to draw graphics or shapes on the canvas using javascript



const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/**
 *  putting these 2 variables as global variables 
 * so i can access them outside of the drawCicle() function.
 *  */ 
let size = 20
let color = 'black'
let x 
let y





/* x and y are the positioning of canvas 
 of where i want to draw the circle.*/
function drawCircle(x,y) {
    ctx.beginPath();
    /* arc takes in the positioning of where i 
    want to put the outer circle.
    the radius of the circle 50
    0 start angle 
    Math.PI * 2 end angle
    */
    ctx.arc(x,y,size,0, Math.PI * 2)
    ctx.fillStyle = color
    /** filling the circle  */
    ctx.fill()
}

function drawLine(x1,y1,x2,y2) {
    ctx.beginPath();
    /**this does not plot anything it just moves to it */
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    // starts as black
    ctx.strokeStyle = color
    ctx.lineWidth = size
    // this actually draws the line
    ctx.stroke()
}


// I WANT TO CALL THESE DYNAMICALLY so i use a mouse movement event 
// drawCircle(100,200) 
// // 100 on the x axis and 200 down on the y axis within the CANVAS
// drawLine(300,300,300, 500)
// /** starts from 300,300
//  * then draw down 300 to 500  */ 




