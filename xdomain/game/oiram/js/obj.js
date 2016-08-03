function movingObject(x, y, vy, jump, color){
  this.x=x;
  this.y=y;
  this.vy=vy;
  this.color=color;
  this.jump=0;
  this.draw=function(){
    if (this.y<=530){ this.y+=this.vy; this.vy+=2; }
    if (this.y>530){ this.y=530; }
    if (this.y==530) { this.jump=0; }
    ctx.fillStyle=this.color;
    ctx.beginPath();
    ctx.arc(this.x, Math.abs(this.y), 10, 0, Math.PI*2, false);
    ctx.fill();
  };
}
