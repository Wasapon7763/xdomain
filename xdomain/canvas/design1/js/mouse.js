function mouseMove(){
  mouseX=event.clientX;
  mouseY=event.clientY;
}
function mouseDown(){
  isMouseDown=true;
  return false;
}
function mouseUp(){
  isMouseDown=false;
  return false;
}
