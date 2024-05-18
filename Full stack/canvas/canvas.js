const draw = () => {
const canvas = document.getElementById("mycanvas");
canvas.height = 400;
canvas.width = 400;
const ctx = canvas.getContext('2d');
const dice = Math.floor(Math.random() * 6) + 1;
const drawDot = (x, y) => {
ctx.beginPath();
ctx.arc(x, y, 10, 0, Math.PI * 2);
ctx.fill();};
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "white";
ctx.fillRect(100, 100, 200, 200);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.strokeRect(100, 100, 200, 200);
ctx.fillStyle = "black";
switch (dice) {
    case 1:
        drawDot(200, 200);
        break;
    case 2:
        drawDot(150, 150);
        drawDot(250, 250);
        break;
    case 3:
        drawDot(150, 150);
        drawDot(200, 200);
        drawDot(250, 250);
        break;
    case 4:
        drawDot(150, 150);
        drawDot(150, 250);
        drawDot(250, 150);
        drawDot(250, 250);
        break;
    case 5:
        drawDot(150, 150);
        drawDot(150, 250);
        drawDot(200, 200);
        drawDot(250, 150);
        drawDot(250, 250);
        break;
    case 6:
        drawDot(150, 150);
        drawDot(150, 200);
        drawDot(150, 250);
        drawDot(250, 150);
        drawDot(250, 200);
        drawDot(250, 250);
        break;
    }
};


