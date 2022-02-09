const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// //FillReact
// ctx.fillStyle = 'red'
// ctx.fillRect(20,20,150,100)
// ctx.fillStyle = 'blue'
// ctx.fillRect(200,20,150,100)

// //strokeRect()
// ctx.lineWidth=5;
// ctx.strokeStyle = 'green'
// ctx.strokeRect(100,200,150,100)

// //Clear Rect
// ctx.clearRect(25,25,140,90)

// //FillText()
// ctx.font='30px Arial';
// ctx.fillStyle = 'purple';
// ctx.fillText('Hello Wolrd',400,50);

// //stokeText()
// ctx.lineWidth=1;
// ctx.strokeText('Hello World',400,100)


// Paths  

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150,50)
// ctx.lineTo(100,200)
// // ctx.lineTo(50,50)
// ctx.closePath()
// ctx.stroke()



ctx.beginPath();
ctx.react(300,50,150,100);
ctx.fillStyle = 'blue'
ctx.fill()

