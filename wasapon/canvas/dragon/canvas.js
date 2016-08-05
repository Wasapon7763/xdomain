var ctx;
var H=720;
var W=1280;
var N=0;

function Point(x, y){
  this.x=x;
  this.y=y;
}

function inc(){
  N++;
  ctx.fillStyle="rgb(255, 255, 255)";
  ctx.fillRect(0, 0, W, H);
  init();
}
function dec(){
  if (N>0){
  N--;
    ctx.fillStyle="rgb(255, 255, 255)";
    ctx.fillRect(0, 0, W, H);
    init();
  }
}

function init(){
  var canvas=document.getElementById("cnvs");
  if (canvas.getContext){
    ctx=canvas.getContext("2d");
    document.getElementById("level").innerHTML=N;
    draw();
  }
}

function line(x, y, nx, ny){
  x+=W/2;
  y+=H/2;
  nx+=W/2;
  ny+=H/2;
  ctx.strokeStyle="rgb(255, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(nx, ny);
  ctx.stroke();
}

function dragon(a, b, i){
  var lx=b.x-a.x;
  var ly=a.y-b.y;
  var c=new Point(a.x+(lx+ly)/2, b.y+(lx+ly)/2);

  if (i==0){
    line(a.x, a.y, c.x, c.y);
    line(b.x, b.y, c.x, c.y);
  }
  else{
    dragon(a, c, i-1);
    dragon(b, c, i-1);
  }

}
//dragon 480 by 480 + 480 by 480
function draw(){
  var a=new Point(-360, -120);
  var b=new Point(360, -120);
  dragon(a, b, N);
}
