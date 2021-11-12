var mouse_event = "empty";
var last_x, last_y;

canvas = document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="white";
line_width= 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{

color=document.getElementById("color").value;
line_width=document.getElementById("line_width").value;


mouse_event = "mousedown";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{

cur_x_pos = e.clientX - canvas.offsetLeft;
cur_y_pos = e.clientY - canvas.offsetTop;

if (mouse_event == "mousedown")

{

    ctx.beginPath(); 
    ctx.strokeStyle= color; 
    ctx.lineWidth = line_width; 
    ctx.arc( cur_x_pos, cur_y_pos, 80, 0, 2 * Math.PI); ctx.stroke();

console.log("Last position of X and Y =");
console.log("X = "+ last_x + "Y = "+ last_y);
ctx.moveTo(last_x, last_y);

console.log("Current position of X and Y =");
console.log("X = "+ cur_x_pos + "Y = "+ cur_y_pos);
ctx.lineTo(cur_x_pos, cur_y_pos );
ctx.stroke()




}

last_x = cur_x_pos;
last_y = cur_y_pos;

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{

mouse_event = "mouseup";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{

mouse_event = "mouseleave";

}

function clearArea() 

{

ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}










