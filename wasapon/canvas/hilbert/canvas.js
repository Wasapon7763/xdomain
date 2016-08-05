var ctx;
var W=720;
var H=720;
var N=1;
function inc(){
  N++;
  ctx.fillStyle="rgb(255, 255, 255)";
  ctx.fillRect(0, 0, W, H);
  init();
}
function dec(){
  if (N>1){
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
//up:1 right:2 down:3 left:4
function line(x, y, nx, ny, i){
  if (i==1){
    y*=-1;
    ny*=-1;
    x+=W/2;
    y+=H/2;
    nx+=W/2;
    ny+=H/2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(nx, ny);
    ctx.stroke();
  }
}
function draw(){
  var h, x, y;
  h=H;
  x=0;
  y=0;
  for (var i=N;i>N-1;i--){
    h/=2;
    x-=h/2;
    y-=h/2;
    URD(i, x, y, h, 0);
  }
}
function connect(x, y, d, h, i){
  if (d==1){
    line(x, y, x, y+h, i);
  }
  if (d==2){
    line(x, y, x+h, y, i);
  }
  if (d==3){
    line(x, y, x, y-h, i);
  }
  if (d==4){
    line(x, y, x-h, y, i);
  }
}
function URD(i, x, y, h, d){
  if (i>0){
    RUL(i-1, x-h/4, y-h/4, h/2, 1);
    line(x, y, x, y+h, i);
    y+=h;
    URD(i-1, x-h/4, y-h/4, h/2, 2);
    line(x, y, x+h, y, i);
    x+=h;
    URD(i-1, x-h/4, y-h/4, h/2, 3);
    line(x, y, x, y-h, i);
    y-=h;
    if (d==2)
      LDR(i-1, x+h/4, y+h/4, h/2, 2);
    if (d==3)
      LDR(i-1, x+h/4, y+h/4, h/2, 3);
    else
      LDR(i-1, x+h/4, y+h/4, h/2, 0);
    connect(x, y, d, h, i);
  }
}
function RUL(i, x, y, h, d){
  if (i>0){
    URD(i-1, x-h/4, y-h/4, h/2, 2);
    line(x, y, x+h, y, i);
    x+=h;
    RUL(i-1, x-h/4, y-h/4, h/2, 1);
    line(x, y, x, y+h, i);
    y+=h;
    RUL(i-1, x-h/4, y-h/4, h/2, 4);
    line(x, y, x-h, y, i);
    x-=h;
    if (d==1)
      DLU(i-1, x+h/4, y+h/4, h/2, 1);
    if (d==4)
      DLU(i-1, x+h/4, y+h/4, h/2, 4);
    else
      DLU(i-1, x+h/4, y+h/4, h/2, 0);
    connect(x, y, d, h, i);
  }
}
function LDR(i, x, y, h, d){
  if (i>0){
    DLU(i-1, x+h/4, y+h/4, h/2, 4);
    line(x, y, x-h, y, i);
    x-=h;
    LDR(i-1, x+h/4, y+h/4, h/2, 3);
    line(x, y, x, y-h, i);
    y-=h;
    LDR(i-1, x+h/4, y+h/4, h/2, 2);
    line(x, y, x+h, y, i);
    x+=h
    if (d==3)
      URD(i-1, x-h/4, y-h/4, h/2, 3);
    if (d==2)
      URD(i-1, x-h/4, y-h/4, h/2, 2);
    else
      URD(i-1, x-h/4, y-h/4, h/2, 0);
    connect(x, y, d, h, i);
  }
}
function DLU(i, x,  y, h, d){
  if (i>0){
    LDR(i-1, x+h/4, y+h/4, h/2, 3);
    line(x, y, x, y-h, i);
    y-=h;
    DLU(i-1, x+h/4, y+h/4, h/2, 4);
    line(x, y, x-h, y, i);
    x-=h;
    DLU(i-1, x+h/4, y+h/4, h/2, 1);
    line(x, y, x, y+h, i);
    y+=h;
    if (d==4)
      RUL(i-1, x-h/4, y-h/4, h/2, 4);
    if (d==1)
      RUL(i-1, x-h/4, y-h/4, h/2, 1);
    else
      RUL(i-1, x-h/4, y-h/4, h/2, 0);
    connect(x, y, d, h, i);
  }
}
