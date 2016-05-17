function disp(){ //display the string to type
  document.getElementById("enemy_word").innerHTML=string;
  document.getElementById("comment").innerHTML=string_comt;
}
function typed(i){ //typed charAt(i)
  //document.getElementById("enemy_word").innerHTML='<a id="typed" style="color:#FF4500">'+string.substring(0, i+1)+'</a>'+string.substring(i+1, string.length);
  document.getElementById("enemy_word").innerHTML='<a id="typed" style="color:#FF4500">'+string.substring(0, i)+'<a id="hop">'+string[i]+'</a>'+'</a>'+string.substring(i+1, string.length);
}
