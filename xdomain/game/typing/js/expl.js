function expl(i){
  var $expl=document.getElementsByName("expl")
  switch (i){
    case 1:
      $expl[0].innerHTML="<p>LEVEL1<br>Word length : 3 ~ 5<br>Time : 60 seconds</p>"
      break;
    case 2:
      $expl[0].innerHTML="<p>LEVEL2<br>Word length : 6 ~ 8<br>Time : 90 seconds</p>"
      break;
    case 3:
      $expl[0].innerHTML="<p>LEVEL3<br>Word length : 9 ~<br>Time : 120 seconds</p>"
      break;
  }
}
