const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

    ctx.fillStyle = 'red'
    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(75,100);
    ctx.stroke();
    ctx.fill();
