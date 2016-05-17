function drawing(){
  ctx.setTransform(2,0,0,1,-W/2,0);
  ctx.strokeStyle="#FFFFFF";
  ctx.beginPath();
  ctx.lineWidth=2;
  ctx.arc(W/2,H/2,100,0,Math.PI*2,false);
  ctx.stroke();
  ctx.setTransform(1,0,0,1,0,0);
  ctx.font= 'bold 40px Osaka';
  ctx.strokeStyle = '#FF0000';
  ctx.lineWidth = 3;
  ctx.lineJoin = 'round';
  ctx.fillStyle = '#fff';
  ctx.strokeText("Wasapon Development",W/2,H/2,600);
  //ctx.strokeText("Page",);
  ctx.fillText("Wasapon Development Page",15,175);
}
