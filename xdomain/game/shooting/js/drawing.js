function drawShip(){
  ctx.strokeStyle="#FFFFFF";
  ctx.beginPath();
  ctx.moveTo(ship.x-10, ship.y+10);
  ctx.lineTo(ship.x+10, ship.y+10);
  ctx.lineTo(ship.x, ship.y-10);
  ctx.lineTo(ship.x+4, ship.y+10);
  ctx.moveTo(ship.x, ship.y-10);
  ctx.lineTo(ship.x-4, ship.y+10);
  ctx.moveTo(ship.x, ship.y-10);
  ctx.lineTo(ship.x-10, ship.y+10);
  ctx.stroke();
}

function drawBullet(){
  ctx.fillStyle="#FFFFFF";
  for (var i=0;i<bullet.length;i++){
    if (bullet[i].disp==true){
      ctx.fillRect(bullet[i].x-2, bullet[i].y, 4, 20);
    }
  }
}

function drawBoss(){
  
}
