var ctx;

var W=800;
var H=540;
var cursorX;
var cursorY;

var key;
var wrapperDiv;

//(x, y, vy, jump, color)
var mario=new movingObject(10, 530, 20, 0, "rgb(255, 0, 0)");

function init(){
  var canvas=document.getElementById("cnvs");
  if (canvas.getContext){
    ctx=canvas.getContext("2d");
    set();
    setInterval(main, 33);
  }
}

function main(){
  ctx.globalCompositeOperation="source-over";
  ctx.fillStyle="#FFFFFF";
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle="rgb(0, 255, 0)";
  ctx.fillRect(500, 440, 200, 10);
  ctx.fillRect(520, 450, 160, 90);

  if (cursorX<W/2-100&&mario.x>10){ mario.x-=6; key=-1; }
  if (cursorX>W/2+100&&mario.x<790){ mario.x+=6; key=-1; }
  if (cursorY<540&&mario.jump!=1) { mario.vy=-20; mario.jump=1; };
  mario.draw();
}

function set(){
  wrapperDiv=document.getElementById("wrapper");
  document.onmousemove=mousePos;
  document.onkeydown=keyDown;
}

function mousePos(){
  cursorX=event.clientX-wrapperDiv.offsetLeft;
  cursorY=event.clientY-wrapperDiv.offsetTop;
}

function keyDown(){
  key=event.keyCode;
}
