var ctx;
var input;
var timer;
var ignite;
var score=0;
var level=1;
var lost=0;

var H=500;
var W=600;

var bar;
var ball;
var block=[];

var mouseX=W/2;
var mousePrevX;

var wrapperDiv;
var scoreDiv;
var levelDiv;
function init(){
  var context=document.getElementById("cnvs");
  if (context.getContext){
    ctx=context.getContext("2d");
    setup();
    timer=setInterval(draw, 33);
  }

  document.onmousemove=mouseMove;
  document.onkeydown=keyDown;
}
function setup(){
  bar=new Bar();
  ball=new Ball();
  block=block1;

  wrapperDiv=document.getElementById("wrapper");
  scoreDiv=document.getElementById("score");
  levelDiv=document.getElementById("level");

  ignite=0;
  mousePrevX=mouseX;
}
function draw(){
  ctx.globalCompositeOperation="source-over";
  ctx.fillStyle="rgba(0, 0, 0, 0.3)";
  ctx.fillRect(0, 0, W, H);
  ctx.globalCompositeOperation="lighter";

  var mv=mouseX-mousePrevX;

  //ignite ball when space pressed
  if (ignite==1&&ball.disp==false){
    ball.disp=true;
    ball.x=mouseX;
    ball.y=458;
    ball.vx=Math.random()*8-4;
    ball.vy=-(Math.random()*8+6);
  }

  //update ball speed
  ball.x+=ball.vx;
  ball.y+=ball.vy;

  //ball bounce
  if (ball.x<0||ball.x>W) ball.vx*=-1;
  if (ball.y<0) ball.vy*=-1;
  else if(ball.y>H){
     ball.disp=false;
     score-=200;
     if (score<0) score=0;
     lost++;
     ball.y=NaN;
     ignite=0;
     document.getElementById("msg").style.display="inherit";
  }
  if (isOnBar()==1){
    ball.vx+=mv/5;
    ball.vy*=-1;
  }
  if (isOnBlock()==1) ball.vy*=-1;

  //bar length max and min
  if (mouseX-bar.length*4<0) bar.x=10*bar.length/2-10;
  else if(mouseX+bar.length*5>W) bar.x=W-10*bar.length/2;
  else bar.x=mouseX;

  //draw block
  for (var i=0;i<10;i++){
    for (var j=0;j<6;j++){
      if (block[i][j]==1){
        ctx.fillStyle="#FFA500";
        ctx.fillRect(j*100+5,i*20+10,90,10);
      }
      if (block[i][j]==0){
        ctx.fillStyle="#000000";
        ctx.fillRect(j*100+5,i*20+10,90,10);
      }
    }
  }
  //draw ball
  if (ball.disp==true){
    ctx.fillStyle="#FFFFFF";
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 6, 0, Math.PI*2, false);
    ctx.fill();
  }
  //draw bar
  ctx.fillStyle="#F0F8FF";
  for (var i=0;i<bar.length/2;i++){
    ctx.fillRect(bar.x+10*i, 460, 10, 10);
    ctx.fillRect(bar.x-10*i, 460, 10, 10);
  }

  scoreDiv.innerHTML="SCORE : "+score+"<br><div style='font-size:30px;'>BALLS LOST : "+lost+"</div>";
  levelDiv.innerHTML="LEVEL<br>"+level;

  mousePrevX=mouseX;

  if (check()==1){
    if (level==10){
      clearInterval(timer);
      alert(score);
    }
    level++;
    switch(level){
      case 2:
        block=block2;
        break;
      case 3:
        block=block3;
        break;
      case 4:
        block=block4;
        break;
      case 5:
        block=block5;
        break;
      case 6:
        block=block6;
        break;
      case 7:
        block=block7;
        break;
      case 8:
        block=block8;
        break;
      case 9:
        block=block9;
        break;
      case 10:
        block=block10;
        break;
    }
    ball.disp=false;
    ball.y=NaN;
    ignite=0;
    document.getElementById("msg").style.display="inherit";
  }
}
function Bar(){
  this.length=12;
  this.x=0;
}
function Ball(){
  this.x=0;
  this.y=0;
  this.vx=0;
  this.vy=0;
  this.disp=false;
}
function isOnBar(){
  if ((bar.x+5*bar.length+5)>ball.x&&(bar.x-5*bar.length+5)<ball.x&&ball.y<=468&&ball.y>=458) return 1;
  return 0;
}
function isOnBlock(){
  for (var i=0;i<10;i++){
    for (var j=0;j<6;j++){
      if (block[i][j]==0) continue;
      else{
        if ((ball.x>=j*100+5)&&(ball.x<=j*100+95)&&(ball.y>=i*20+6)&&(ball.y<=i*20+26)){
          block[i][j]=0;
          score+=100;
          return 1;
        }
      }
    }
  }
  return 0;
}
function check(){
  for (var i=0;i<10;i++){
    for (var j=0;j<6;j++){
      if (block[i][j]==1) return 0;
    }
  }
  return 1;
}
function mouseMove(){
  mouseX = event.clientX-wrapperDiv.offsetLeft;
}
function keyDown(){
  if (event.keyCode==32&&ignite==0){
     document.getElementById("msg").style.display="none";
     ignite=1;
   }
}
