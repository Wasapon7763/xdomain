var ctx;
var input;
var H=500;
var W=600;
var B;
var mouseX;
var wrapperDiv;
function init(){
  var context=document.getElementById("cnvs");
  if (context.getContext){
    ctx=context.getContext("2d");
    B=new Bar();
    wrapperDiv=document.getElementById("wrapper");
    setInterval(draw, 33);
  }

  document.onmousemove=mouseMove;
}
function draw(){
  ctx.globalCompositeOperation="source-over";
  ctx.fillStyle="rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, W, H);
  ctx.globalCompositeOperation="lighter";

  if (mouseX-B.length*4<0) B.x=10*B.length/2-10;
  else if(mouseX+B.length*5>W) B.x=W-10*B.length/2;
  else B.x=mouseX;

  ctx.fillStyle="#F0F8FF";
  for (var i=0;i<B.length/2;i++){
    ctx.fillRect(B.x+10*i, 460, 10, 10);
    ctx.fillRect(B.x-10*i, 460, 10, 10);
  }
}
function Bar(){
  this.length=12;
  this.x=0;
}

function mouseMove(){
  mouseX = event.clientX-wrapperDiv.offsetLeft;
}
