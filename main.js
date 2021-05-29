canvas =
document.getElementById("my_canvas");
ctx=canvas.getcontext("2d")
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.arc(150, 143, 430 ,200);
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth 5;
ctx.arc(250, 210, 40,0,2 * Math.PI);
ctx.stroke();
