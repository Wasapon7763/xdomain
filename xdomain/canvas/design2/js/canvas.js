var ctx;
var time=0;
var itvl=30;
var interval;

var W=window.innerWidth;
var H=window.innerHeight;

var mouseX=150;
var mouseY=150;
var mousePrevX;
var mousePrevY;

var numBalls=150;
var balls=[];

var isMouseDown;

function init(){
  var canvas=document.getElementById("cnvs");
  if (canvas.getContext){
    ctx=canvas.getContext("2d");
    setup();
    interval=setInterval(draw, 33);
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
  document.onmousedown=mouseDown;
  document.onmouseup=mouseUp;
}

function draw(){
  ctx.globalCompositeOperation="source-over";
  ctx.fillStyle="rgba(0,0,0,0.2)";
  ctx.fillRect(0,0,W,H);
  ctx.globalCompositeOperation="lighter";

  for (var i=0;i<numBalls;i++){
    var b=balls[i];

    var toX=mouseX-Math.sin(Math.PI*(time/itvl))*((100+b.rlag)*Math.cos(Math.PI*(time/(itvl+b.timelag))));
    var toY=mouseY+Math.sin(Math.PI*(time/itvl))*((100+b.rlag)*Math.sin(Math.PI*(time/(itvl+b.timelag))));
    var dX=toX-b.x;
    var dY=toY-b.y;
    var d=Math.sqrt(dX*dX+dY*dY);

    if (Math.abs(dX)<15&&Math.abs(dY)<15){
      b.x=toX;
      b.y=toY;
    }
    else{
      dX/=d;
      dY/=d;
      b.x+=(dX*20);
      b.y+=(dY*20);
    }

    if (isMouseDown){
      b.vx+=2*(Math.random()*8-4);
      b.vy+=2*(Math.random()*8-4);
    }
    else{
      b.vx=b.vy=0;
    }

    b.x+=b.vx;
    b.y+=b.vy;
    if (b.x<0||b.x>W) b.x*=-1;
    if (b.y<0||b.y>H) b.y*=-1;

    //drawing();

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
  this.x=150;
  this.y=150;
  this.vx=0;
  this.vy=0;
  this.timelag=Math.floor(Math.random()*itvl);
  this.rlag=Math.random()*20;
  this.size=Math.random()*3+1;
}
