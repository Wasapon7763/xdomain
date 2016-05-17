var ctx;
var time=0;
var itvl=30;

var W=window.innerWidth;
var H=window.innerHeight;

var mouseX=W/2;
var mouseY=H/2;
var mousePrevX;
var mousePrevY;

var numBalls=50;
var balls=[];

function init(){
  var canvas=document.getElementById("cnvs");
  if (canvas.getContext){
    ctx=canvas.getContext("2d");
    setup();
    setInterval(draw, 33);
  }
}

function setup(){
  for (var i=0;i<numBalls;i++){
    var b=new Ball();
    balls[i]=b;
  }

  mousePrevX=mouseX;
  mousePrevY=mouseY;

  document.onmousemove=mouseMove;
}

function draw(){
  ctx.globalCompositeOperation="source-over";
  ctx.fillStyle="rgba(8,8,12,0.2)";
  ctx.fillRect(0,0,W,H);
  ctx.globalCompositeOperation="lighter";

  for (var i=0;i<numBalls;i++){
    var b=balls[i];

    var toX=mouseX-Math.sin(Math.PI*(time/itvl))*((100+b.rlag)*Math.cos(Math.PI*(time/(itvl+b.timelag))));
    var toY=mouseY+Math.sin(Math.PI*(time/itvl))*((100+b.rlag)*Math.sin(Math.PI*(time/(itvl+b.timelag))));
    var dX=toX-b.x;
    var dY=toY-b.y;
    var d=Math.sqrt(dX*dX+dY*dY);
    if (Math.abs(dX)<10&&Math.abs(dY)<10){
      b.x=toX;
      b.y=toY;
    }
    else{
      dX/=d;
      dY/=d;
      b.x+=(dX*12);
      b.y+=(dY*12);
    }

    ctx.fillStyle=b.color;
    ctx.beginPath();
    ctx.arc(b.x,b.y,b.size,0,Math.PI*2,false);
    ctx.fill();
  }

  mousePrevX=mouseX;
  mousePrevY=mouseY;
  time++;
}

function Ball(){
  this.color="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
  this.x=400;
  this.y=400;
  this.vx=0;
  this.vy=0;
  this.timelag=Math.floor(Math.random()*itvl);
  this.rlag=Math.random()*10;
  this.size=Math.random()*3+1;
}

function mouseMove(){
  mouseX=event.clientX;
  mouseY=event.clientY;
}
