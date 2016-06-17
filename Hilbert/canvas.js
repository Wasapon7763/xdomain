var ctx;
var W=720;
var H=720;
var N=2;
function init(){
  var canvas=document.getElementById("cnvs");
  if (canvas.getContext){
    ctx=canvas.getContext("2d");
    draw();
  }
}
function draw(){
  var h, x, y;
  h=H;
  x=h/2;
  y=x;
  for (var i=N;i>N-1;i--){
    h/=2;
    x-=h/2;
    y+=h/2;
    URD(i, x, y, h);
  }
}
function URD(i, x, y, h){
  if (i>0){
    var v=(i-1)*h/2;
    RUL(i-1, x-h/4, y+h/4, h/2);
      ctx.beginPath();
      ctx.moveTo(x-v, y-v);
      ctx.lineTo(x-v, y-v-h/Math.pow(2, i-1));
      ctx.stroke();
    y-=h;
    URD(i-1, x-h/4, y+h/4, h/2);
      ctx.beginPath();
      ctx.moveTo(x+v, y+v);
      ctx.lineTo(x+v+h/Math.pow(2, i-1), y+v);
      ctx.stroke();
    x+=h;
    URD(i-1, x-h/4, y+h/4, h/2);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y+h/Math.pow(2, i-1));
      ctx.stroke();
    y+=h;
    LDR(i-1, x+h/4, y-h/4, h/2);


  }
}
function RUL(i, x, y, h, a, b){
  if (i>0){
    URD(i-1, x-h/4, y+h/4, h/2);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x+h/Math.pow(2, i-1), y);
      ctx.stroke();
    x+=h;
    RUL(i-1, x-h/4, y+h/4, h/2);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y-h/Math.pow(2, i-1));
      ctx.stroke();
    y-=h;
    RUL(i-1, x-h/4, y+h/4, h/2);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x-h/Math.pow(2, i-1), y);
      ctx.stroke();
    x-=h;
    DLU(i-1, x+h/4, y-h/4, h/2);


  }
}
function LDR(i, x, y, h, a, b){
  if (i>0){
    DLU(i-1, x+h/4, y-h/4, h/2);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x-h/Math.pow(2, i-1), y);
      ctx.stroke();
    x-=h;
    LDR(i-1, x+h/4, y-h/4, h/2);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y+h/Math.pow(2, i-1));
      ctx.stroke();
    y+=h;
    LDR(i-1, x+h/4, y-h/4, h/2);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x+h/Math.pow(2, i-1), y);
      ctx.stroke();
    x+=h;
    URD(i-1, x-h/4, y+h/4, h/2);


  }
}
function DLU(i, x, y, h, a, b){
  if (i>0){
    LDR(i-1, x+h/4, y-h/4, h/2);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y+h/Math.pow(2, i-1));
      ctx.stroke();
    y+=h;
    DLU(i-1, x+h/4, y-h/4, h/2);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x-h/Math.pow(2, i-1), y);
      ctx.stroke();
    x-=h;
    DLU(i-1, x+h/4, y-h/4, h/2);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y-h/Math.pow(2, i-1));
      ctx.stroke();
    y-=h;
    RUL(i-1, x-h/4, y+h/4, h/2);


  }
}
