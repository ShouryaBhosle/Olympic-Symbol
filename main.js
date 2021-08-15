canvas = document.getElementById("myCanvas");
color = "blue";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = color;
ctx.lineWidth = 2;
ctx.rect(250 ,40 ,0 , 2 * Math.PI);
ctx.stroke();


ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(350 ,210 ,40 ,0 , 2 * Math.PI);
ctx.stroke();


ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(400 ,210 ,40 ,0 , 2 * Math.PI);
ctx.stroke();


ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(450 ,210 ,40 ,0 , 2 * Math.PI);
ctx.stroke();


ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(500 ,210 ,40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(380 ,250 ,40 ,0 , 2 * Math.PI);
ctx.stroke();


ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = "orange";
ctx.lineWidth = 2;
ctx.arc(430 ,250 ,40 ,0 , 2 * Math.PI);
ctx.stroke();


ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = "pink";
ctx.lineWidth = 2;
ctx.arc(480 ,250 ,40 ,0 , 2 * Math.PI);
ctx.stroke();


