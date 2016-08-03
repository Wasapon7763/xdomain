var ctx;
var W=760;
var H=760
var cursorX;
var cursorY;

var wrapperDiv;

var cube[8][3]=[[ 1,  1,  1],
                [ 1,  1, -1],
                [-1,  1,  1],
                [-1,  1, -1],
                [ 1, -1,  1],
                [ 1, -1, -1],
                [-1, -1,  1],
                [-1, -1, -1]];

function init(){
  var canvas=document.getElementById("cnvs");
  if (canvas.getContext){
    ctx=canvas.getContext("2d");
    wrapperDiv=document.getElementById("wrapper");
    document.onmousemove=mouseMove;
    setInterval(draw, 33);
  }
}

function draw(){
  ctx.globalCompositeOperation="source-over";
  ctx.fillStyle="#FFFFFF";
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle="#000000";
  ctx.beginPath();
  ctx.arc(cursorX, cursorY, 10, 0, Math.PI*2, false);
  ctx.fill();
}

function mouseMove(){
  cursorX=event.clientX-wrapperDiv.offsetLeft;
  cursorY=event.clientY-wrapperDiv.offsetTop;
}
