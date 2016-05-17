function write_html(){
	var c=0;
	var $box=document.getElementsByClassName("box");
	for (var i=0;i<4;i++){
		for (var j=0;j<4;j++){

			if (grid[i][j]!=0){
				if (grid_anim_add[i][j]==1) //shrinking animation
					$box[c].innerHTML='<div class="cell cell_anim"><div class="num"></div></div>';
				else
					$box[c].innerHTML='<div class="cell"><div class="num"></div></div>';
			}
			else{ //no number in the cell
				$box[c].innerHTML='';
			}

			c++;
		}
	}
}
/*function move_cell(){
	var c=0;
	var $box=document.getElementsByClassName("box");
	for (var i=0;i<4;i++){
		for (var j=0;j<4;j++){
			c++;
			if (grid_cpy[i][j]!=0){
				$box[c-1].innerHTML='<div class="cell '+'cell'+c+'"><div class="num"></div></div>';
				console.log('<div class="cell '+'cell'+c+'"><div class="num"></div></div>');
			}
			else $box[c-1].innerHTML='';
		}
	}
	$(".cell1").animate({"top": "-="+(120*Math.round(0.0-grid_anim_move[0][0]))+"px"}, 70).animate({"left": "-="+(116*(0.0-grid_anim_move[0][0])*10)+"px"}, 70);
	$(".cell2").animate({"top": "-="+(120*Math.round(0.1-grid_anim_move[0][1]))+"px"}, 70).animate({"left": "-="+(116*(0.1-grid_anim_move[0][1])*10)+"px"}, 70);
	$(".cell3").animate({"top": "-="+(120*Math.round(0.2-grid_anim_move[0][2]))+"px"}, 70).animate({"left": "-="+(116*(0.2-grid_anim_move[0][2])*10)+"px"}, 70);
	$(".cell4").animate({"top": "-="+(120*Math.round(0.3-grid_anim_move[0][3]))+"px"}, 70).animate({"left": "-="+(116*(0.3-grid_anim_move[0][3])*10)+"px"}, 70);
	$(".cell5").animate({"top": "-="+(120*Math.round(1.0-grid_anim_move[1][0]))+"px"}, 70).animate({"left": "-="+(116*(1.0-grid_anim_move[1][0])*10)+"px"}, 70);
	$(".cell6").animate({"top": "-="+(120*Math.round(1.1-grid_anim_move[1][1]))+"px"}, 70).animate({"left": "-="+(116*(1.1-grid_anim_move[1][1])*10)+"px"}, 70);
	$(".cell7").animate({"top": "-="+(120*Math.round(1.2-grid_anim_move[1][2]))+"px"}, 70).animate({"left": "-="+(116*(1.2-grid_anim_move[1][2])*10)+"px"}, 70);
	$(".cell8").animate({"top": "-="+(120*Math.round(1.3-grid_anim_move[1][3]))+"px"}, 70).animate({"left": "-="+(116*(1.3-grid_anim_move[1][3])*10)+"px"}, 70);
	$(".cell9").animate({"top": "-="+(120*Math.round(2.0-grid_anim_move[2][0]))+"px"}, 70).animate({"left": "-="+(116*(2.0-grid_anim_move[2][0])*10)+"px"}, 70);
	$(".cell10").animate({"top": "-="+(120*Math.round(2.1-grid_anim_move[2][1]))+"px"}, 70).animate({"left": "-="+(116*(2.1-grid_anim_move[2][1])*10)+"px"}, 70);
	$(".cell11").animate({"top": "-="+(120*Math.round(2.2-grid_anim_move[2][2]))+"px"}, 70).animate({"left": "-="+(116*(2.2-grid_anim_move[2][2])*10)+"px"}, 70);
	$(".cell12").animate({"top": "-="+(120*Math.round(2.3-grid_anim_move[2][3]))+"px"}, 70).animate({"left": "-="+(116*(2.3-grid_anim_move[2][3])*10)+"px"}, 70);
	$(".cell13").animate({"top": "-="+(120*Math.round(3.0-grid_anim_move[3][0]))+"px"}, 70).animate({"left": "-="+(116*(3.0-grid_anim_move[3][0])*10)+"px"}, 70);
	$(".cell14").animate({"top": "-="+(120*Math.round(3.1-grid_anim_move[3][1]))+"px"}, 70).animate({"left": "-="+(116*(3.1-grid_anim_move[3][1])*10)+"px"}, 70);
	$(".cell15").animate({"top": "-="+(120*Math.round(3.2-grid_anim_move[3][2]))+"px"}, 70).animate({"left": "-="+(116*(3.2-grid_anim_move[3][2])*10)+"px"}, 70);
	$(".cell").animate({"top": "-="+(120*Math.round(3.3-3.0))+"px"}, 70).animate({"left": "-="+(116*(3.3-3.0)*10)+"px"}, 70);
}*/
function digit(n){ //counts digits in disp()
	var d=1;
	while (n>=1){
		n/=10;
		d++;
	}
	return d;
}
function disp(){
	var c=0;
	var size;
	var d;
	get_rand(); //next number to generate
	write_html(); //get grid and write in html
	var $num=document.getElementsByClassName("num");
	var $score=document.getElementsByClassName("score");
	var $cell=document.getElementsByClassName("cell");
	
	for (var i=0;i<4;i++){
		for (var j=0;j<4;j++){
			if (grid[i][j]!=0){
				size=32;
				d=digit(grid[i][j])-1;
				if (d>4){
					size=30-(d-5)*4;
				}
				$num[c].style.fontSize=size+"px"; //changing fontsize by digits

				//changing background color
				if (grid[i][j]==2) $cell[c].style.background="#87cefa";
				else if (grid[i][j]==4) $cell[c].style.background="#48d1cc";
				else if (grid[i][j]==8) $cell[c].style.background="#00ced1";
				else if (grid[i][j]==16) $cell[c].style.background="#20b2aa";
				else if (grid[i][j]==32) $cell[c].style.background="#5f9ea0";
				else if (grid[i][j]==64) $cell[c].style.background="#008b8b";
				else if (grid[i][j]==128) $cell[c].style.background="#66cdaa";
				else if (grid[i][j]==256) $cell[c].style.background="#90ee90";
				else if (grid[i][j]==512) $cell[c].style.background="#00fa9a";
				else if (grid[i][j]==1024) $cell[c].style.background="#7cfc00";
				else if (grid[i][j]==2048) $cell[c].style.background="#adff2f";
				else if (grid[i][j]==4096) $cell[c].style.background="#00ff00";
				else $cell[c].style.background="#9acd32";

				$num[c++].innerHTML=grid[i][j]; //displaying numbers

			}
		}
	}
	$score[0].innerHTML=score;
	$(".cell_anim").animate({
		left: "-10px",
		top: "-10px",
		width: "100px",
		height: "100px"
		}, 50).animate({
		top: 0,
		left: 0,
		width: "80px",
		height: "80px"
	},70);
	if (check_gameover()==1){
		gameover();
		return;
	}
}
