document.onkeydown=keyboardInput;
var combo;
var maxcombo;
var score;
var string_at=0;
var first_word;
var combo_check;
var score_to_add;
function keyboardInput(){
  if (first_word==1){ //press any key
    init_first();
    disp();
  }
  else{
    var input=event.keyCode;

    if (input==27&&game_num==1){
      clearTimeout(set_timer);
      switch_game1();
     }
    else if (input==27&&game_num==2){
      clearTimeout(set_timer);
      switch_game2();
     }
    else if (input==27&&game_num==3){
      clearTimeout(set_timer);
      switch_game3();
     }
    else {

      if (input==189) input=45; //-

      change_word(input);

      if (input==string.charCodeAt(string_at)){
        typed(string_at);
        string_at++;
      }

      else{

        if (maxcombo<combo) maxcombo=combo;

        combo_check=0;
        combo=0;
        document.getElementById("c").innerHTML=combo;

      }

      if (string_at==string.length){ //string typed corectlly

        score+=(score_to_add+100*parseInt(combo/5));
        document.getElementById("s").innerHTML=score;

        init();
        disp();
      }

    }
  }
}
