function get_rand(){
	var count=0,ccount=0;
	var loc,rand;
	for (var i=0;i<4;i++){
		for (var j=0;j<4;j++){
			if (grid[i][j]==0) count++;
		}
	}
	loc=Math.floor(Math.random()*count)+1;
	rand=Math.floor(Math.random()*5);
	if (rand==0) rand=4;
	else rand=2;
	for (var i=0;i<4;i++){
		for (var j=0;j<4;j++){
			if (grid[i][j]==0){
				ccount++;
				if (loc==ccount){
					 grid[i][j]=rand;
					 grid_anim_add[i][j]=1; //transforming new generated cell
				}
			}
		}
	}
}
//for getting two random numbers
(function(){
	get_rand();
})();