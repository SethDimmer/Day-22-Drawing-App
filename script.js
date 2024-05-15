// using Canvas Api to draw graphics or shapes on the canvas using javascript



const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

/**
 *  putting these 2 variables as global variables 
 * so i can access them outside of the drawCicle() function.
 *  */ 
let size = 10
isPressed = false
// wanting to know if the mouse is being pressed
let color = 'black'
let x 
let y


canvas.addEventListener('mousedown',(e) => {
    isPressed =true
    // getting the position of where the mouse is
    x = e.offsetX
    y = e.offsetY
    // console.log(isPressed,x,y)
})
canvas.addEventListener('mousemove',(e) => {
    // i only want this to happen if the mouse is being pressed
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        // console.log(x2,y2)
        // when i click and hold my mouse i am console 
        // logging what my position is.

        drawCircle(x2,y2)
        // when i press to draw it draws circles
        drawLine(x,y,x2,y2)
        x = x2
        y = y2
    }

})

// when i release i want isPressed to be false and i want to clear the offset values
canvas.addEventListener('mouseup',(e) => {
    isPressed =false
    // getting the position of where the mouse is
    x = undefined
    y = undefined
    // console.log(isPressed,x,y)
})


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
    ctx.lineWidth = size * 2
    // this actually draws the line
    ctx.stroke()
}


// I WANT TO CALL THESE DYNAMICALLY so i use a mouse movement event 
// drawCircle(100,200) 
// // 100 on the x axis and 200 down on the y axis within the CANVAS
// drawLine(300,300,300, 500)
// /** starts from 300,300
//  * then draw down 300 to 500  */ 

function updateSizeOnScreen() {
    sizeEL.innerText = size
}


increaseBtn.addEventListener('click',() => {
    size += 5
    // incrementing the size by 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()

})

decreaseBtn.addEventListener('click',() => {
    size -= 5
    // incrementing the size by 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()

})


// i want to listen for a change of color
colorEl.addEventListener('change',(e) => color = e.target.value)

clearEl.addEventListener('click',() => ctx.clearRect(0,
    0, canvas.width, canvas.height))
