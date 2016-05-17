function init(){
	for (var i=0;i<4;i++){
		for (var j=0;j<4;j++){
			grid_anim_add[i][j]=0;
			grid_anim_move[i][j]=0;
			grid_cpy[i][j]=grid[i][j];
		}
	}
}