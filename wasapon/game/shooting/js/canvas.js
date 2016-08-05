var ctx;
var time=0;

var W=400;
var H=600;

var ship;
var bullet=new Array(15);
//var laser=new Array(10);
//var pow=new Array(10);
var launch=0;
var charge=0;
var mouseX;
var mouseY;


var wrapperDiv;
function init(){
  var canvas=document.getElementById("cnvs");
  if (canvas.getContext){
    ctx=canvas.getContext("2d");
    setup();
    setInterval(draw, 33);
  }
}

function setup(){
  ship=new Ship();
  mouseX=W/2;
  mouseY=H/2;

  for (var i=0;i<bullet.length;i++){
    var b=new Bullet();
    b.disp=false;
    b.x=NaN;
    b.y=NaN;
    bullet[i]=b;
  }

  wrapperDiv=document.getElementById("wrapper");

  document.onmousemove=mouseMove;
  document.onkeydown=keyDown;
}

function draw(){
  ctx.globalCompositeOperation="source-over";
  ctx.fillStyle="rgba(0, 0, 0, 0.3)";
  ctx.fillRect(0, 0, W, H);
  ctx.globalCompositeOperation="lighter";

  //ship location
  ship.x=mouseX;
  ship.y=mouseY;
  //max and min location of ship
  if (mouseX+10>W) ship.x=W-10;
  if (mouseY+10>H) ship.y=H-10;
  if (mouseX-10<0) ship.x=10;
  if (mouseY-10<0) ship.y=10;

  //launch bullets
  if (launch==1&&charge>6){
    launch=0;
    charge=0; //launching interval
    for (var i=0;i<bullet.length;i++){
      if (bullet[i].disp==false){
        bullet[i].disp=true;
        bullet[i].x=ship.x;
        bullet[i].y=ship.y-20;
        break;
      }
    }
  }
  //update bullets' location
  for (var i=0;i<bullet.length;i++){
    if (bullet[i].disp==true){
      bullet[i].y-=10;
    }
    if (bullet[i].y<0){
      bullet[i].disp=false;
    }
  }

  drawShip();
  drawBullet();

  charge++;
}

function Ship(){
  this.x;
  this.y;
}
function Bullet(){
  this.disp;
  this.x;
  this.y;
}
function mouseMove(){
  mouseX=event.clientX-wrapperDiv.offsetLeft;
  mouseY=event.clientY-wrapperDiv.offsetTop;
}
function keyDown(){
  var e=event.keyCode;
  if (e==32)
    launch=1;
}
