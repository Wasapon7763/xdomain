var meX = 100;
var meY = 520;
var meVY = 0;
var jump = 0;

function drawMe(){
  if (jump == 1){
    meY += meVY;
    meVY+=3;
    if (meY >= 520){
      meY = 520;
      jump = 0;
    }
  }

  var grad = ctx.createRadialGradient(meX + 7, meY - 7, 0, meX, meY, 25);
  grad.addColorStop(0, "#FFFFFF");
  grad.addColorStop(1, "rgb(255, 0, 0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(meX, meY, 20, Math.PI*2, false);
  ctx.fill();
}
function jumpMe(){
  if (jump == 0){
    jump = 1;
    meVY = -30;
  }
  else
    key = -1;
}

var bridgeX = [0, 250, 500, 750, 1000];
//Y-axis: 540 ~ 560
var slide = 0;

function drawBridge(){
  for (var i = 0; i < 5; i++){
    var grad = ctx.createLinearGradient(bridgeX[i] - slide, 540, bridgeX[i] + 250 - slide, 560);
    grad.addColorStop(1, "#CD853F");
    grad.addColorStop(0, "#D2691E");
    ctx.fillStyle = grad;
    ctx.fillRect(bridgeX[i] - slide, 540, 250, 20);
  }

  for (var i = 0; i < 5; i++){
    grad = ctx.createLinearGradient(bridgeX[i] - slide, 560, bridgeX[i] + 50 - slide, 560);
    grad.addColorStop(0, "#D2691E");
    grad.addColorStop(1, "#D2B48C");
    ctx.fillStyle = grad;
    ctx.fillRect(bridgeX[i] - slide, 560, 50, 440);
  }

  slide+=10;
  if (slide == 250) slide = 0;
}
