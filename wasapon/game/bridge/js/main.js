var ctx;

var H = 720;
var W = 1000;

var mouseX;
var mouseY;

var key;

function init(){
  var canvas = document.getElementById("cnvs");
  if (canvas.getContext){
    ctx = canvas.getContext("2d");
    document.onkeydown = keyDown;
    setInterval(draw, 33);
  }
}

function draw(){
  ctx.globalCompositeOperation = "source-over";
  var grad = ctx.createLinearGradient(0, 0, 0, H/4);
  grad.addColorStop(0, "#FFFFFF");
  grad.addColorStop(1, "#E0FFFF");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  if (key == 32) jumpMe();
  drawMe();
  drawBridge();
}

function keyDown(){
  key = event.keyCode;
}
