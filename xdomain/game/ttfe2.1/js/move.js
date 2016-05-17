function right(){
	var num;
	for (var i=0;i<4;i++){
		var next_loc=3;
		for (var j=0;j<4;j++){
			if (grid[i][3-j]!=0){
				var k=2-j;
				while (k>-1){
					if (grid[i][k]!=0&&grid[i][k]!=grid[i][3-j]){
						num=grid[i][3-j];
						grid[i][3-j]=0;
						grid_anim_move[i][3-j]=i+next_loc/10; //cell-moving
						grid[i][next_loc--]=num;
						break;
					}
					if (grid[i][3-j]==grid[i][k]){
						num=grid[i][3-j]*2;
						score+=num;
						grid[i][3-j]=0;
						grid[i][k]=0;
						grid_anim_move[i][3-j]=i+next_loc/10;
						grid_anim_move[i][k]=i+next_loc/10;
						grid_anim_add[i][next_loc]=1; //cell transforming
						grid[i][next_loc--]=num;
						break;
					}
					k--;
				}
				if (j==3||k==-1){
					num=grid[i][3-j];
					grid[i][3-j]=0;
					grid_anim_move[i][3-j]=i+next_loc/10;
					grid[i][next_loc]=num;
				}
			}
		}
	}
	if (check_grid()==0) return; //no change in the grid
	disp();
}
function left(){
	var num;
	for (var i=0;i<4;i++){
		var next_loc=0;
		for (var j=0;j<4;j++){
			if (grid[i][j]!=0){
				var k=j+1;
				while (k<4){
					if ((grid[i][k]!=0&&grid[i][k]!=grid[i][j])){
						num=grid[i][j];
						grid[i][j]=0;
						grid_anim_move[i][j]=i+next_loc/10;
						grid[i][next_loc++]=num;
						break;
					}
					if (grid[i][j]==grid[i][k]){
						num=grid[i][j]*2;
						score+=num;
						grid[i][j]=0;
						grid[i][k]=0;
						grid_anim_move[i][j]=i+next_loc/10;
						grid_anim_move[i][k]=i+next_loc/10;
						grid_anim_add[i][next_loc]=1
						grid[i][next_loc++]=num;
						break;
					}
					k++;
				}
				if (j==3||k==4){
					num=grid[i][j];
					grid[i][j]=0;
					grid_anim_move[i][j]=i+next_loc/10;
					grid[i][next_loc]=num;
				}
			}
		}
	}
	if (check_grid()==0) return;
	disp();
}
function up(){
	var num;
	for (var i=0;i<4;i++){
		var next_loc=0;
		for (var j=0;j<4;j++){
			if (grid[j][i]!=0){
				var k=j+1;
				while (k<4){
					if ((grid[k][i]!=0&&grid[k][i]!=grid[j][i])){
						num=grid[j][i];
						grid[j][i]=0;
						grid_anim_move[j][i]=next_loc+i/10;
						grid[next_loc++][i]=num;
						break;
					}
					if (grid[j][i]==grid[k][i]){
						num=grid[j][i]*2;
						score+=num;
						grid[j][i]=0;
						grid[k][i]=0;
						grid_anim_move[j][i]=next_loc+i/10;
						grid_anim_move[k][i]=next_loc+i/10;
						grid_anim_add[next_loc][i]=1;
						grid[next_loc++][i]=num;
						break;
					}
					k++;
				}
				if (j==3||k==4){
					num=grid[j][i];
					grid[j][i]=0;
					grid_anim_move[j][i]=next_loc+i/10;
					grid[next_loc++][i]=num;
				}
			}
		}
	}
	if (check_grid()==0) return;	
	disp();
}
function down(){
	var num;
	for (var i=0;i<4;i++){
		var next_loc=3;
		for (var j=0;j<4;j++){
			if (grid[3-j][i]!=0){
				var k=2-j;
				while (k>-1){
					if (grid[k][i]!=0&&grid[k][i]!=grid[3-j][i]){
						num=grid[3-j][i];
						grid[3-j][i]=0;
						grid_anim_move[3-j][i]=next_loc+i/10;
						grid[next_loc--][i]=num;
						break;
					}
					if (grid[3-j][i]==grid[k][i]){
						num=grid[3-j][i]*2;
						score+=num;
						grid[3-j][i]=0;
						grid[k][i]=0;
						grid_anim_move[3-j][i]=next_loc+i/10;
						grid_anim_move[k][i]=next_loc+i/10;
						grid_anim_add[next_loc][i]=1;
						grid[next_loc--][i]=num;
						break;
					}
					k--;
				}
				if (j==3||k==-1){
					num=grid[3-j][i];
					grid[3-j][i]=0;
					grid_anim_move[3-j][i]=next_loc+i/10;
					grid[next_loc][i]=num;
				}
			}
		}
	}
	if (check_grid()==0) return;
	disp();
}