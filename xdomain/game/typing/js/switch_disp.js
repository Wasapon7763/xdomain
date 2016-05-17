var game_num;
function switch_game1(){
  game_num=1;
  first_word=1;
  time=60;
  combo=0;
  score=0;
  maxcombo=0;
  combo_check=1;
  score_to_add=400;
  document.getElementById("menu").style.display="none";
  document.getElementById("gameframe").style.display="inherit";
  document.getElementById("enemy_word").innerHTML="PRESS ANY KEY TO START!!!";
  document.getElementById("comment").innerHTML="日本語が表示されるよん";
  document.getElementById("t").innerHTML=time;
  document.getElementById("s").innerHTML=0;
  document.getElementById("c").innerHTML=0;
}
function switch_game2(){
  game_num=2;
  first_word=1;
  time=90;
  combo=0;
  score=0;
  maxcombo=0;
  combo_check=1;
  score_to_add=600;
  document.getElementById("menu").style.display="none";
  document.getElementById("gameframe").style.display="inherit";
  document.getElementById("enemy_word").innerHTML="PRESS ANY KEY TO START!!!";
  document.getElementById("comment").innerHTML="日本語が表示されるよん";
  document.getElementById("t").innerHTML=time;
  document.getElementById("s").innerHTML=0;
  document.getElementById("c").innerHTML=0;
}
function switch_game3(){
  game_num=3;
  first_word=1;
  time=120;
  combo=0;
  score=0;
  maxcombo=0;
  combo_check=1;
  score_to_add=800;
  document.getElementById("menu").style.display="none";
  document.getElementById("gameframe").style.display="inherit";
  document.getElementById("enemy_word").innerHTML="PRESS ANY KEY TO START!!!";
  document.getElementById("comment").innerHTML="日本語が表示されるよん";
  document.getElementById("t").innerHTML=time;
  document.getElementById("s").innerHTML=0;
  document.getElementById("c").innerHTML=0;
}
function switch_menu(){
  document.getElementById("menu").style.display="inherit";
  document.getElementById("gameframe").style.display="none";
}
function switch_result(){

}
