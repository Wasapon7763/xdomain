function init_first(){
  set_timer=setInterval("count_up()",1000); //time start
  var index=getword_index(); //get word from words
  switch(game_num){
    case 1:
      string=words_1[index];
      string_comt=words_1_comt[index];
    break;
    case 2:
      string=words_2[index];
      string_comt=words_2_comt[index];
    break;
    case 3:
      string=words_3[index];
      string_comt=words_3_comt[index];
    break;
  }
  first_word=0; //not first word any more
}
function init(){
  string_at=0; //string index 0
  var index=getword_index(); //get new word
  switch(game_num){
    case 1:
      string=words_1[index];
      string_comt=words_1_comt[index];
    break;
    case 2:
      string=words_2[index];
      string_comt=words_2_comt[index];
    break;
    case 3:
      string=words_3[index];
      string_comt=words_3_comt[index];
    break;
  }
  if (combo_check==1){ //no wrong typing
    combo++;
    document.getElementById("c").innerHTML=combo;
  }
  combo_check=1;
}
