function gameover(){
	var $board=document.getElementById("menu_board");
	$board.innerHTML='<div id="GameOver">Game Over! Score<div id="lastscore">'+score+'</div></div>';
	$("#GameOver").fadeIn(2000);
}
function check_gameover(){
	var count_zero=0;
	for (var i=0;i<4;i++){ //the number of 0 on the grid
		for (var j=0;j<4;j++){
			if (grid[i][j]==0) count_zero++;
		}
	}
	if (count_zero==0&&ava_move()==0) return 1; //no 0 and no possible move
	return 0;
}