var set_timer;
var time;
function count_up(){
  time--;
  if (time==0){
    clearTimeout(set_timer);
    alert(score);
  }
  document.getElementById("t").innerHTML=time;
}
