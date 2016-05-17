var score=0;
var grid=[ //to display
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]
];
/*	[1,0,3,4],
	[8,7,6,5],
	[9,0,8,7],
	[4,3,5,6]*/
var grid_cpy=[ //copy
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]
];
var grid_hoge=[ //for ava_move
	[-1,-1,-1,-1,-1,-1],
	[-1,0,0,0,0,-1],
	[-1,0,0,0,0,-1],
	[-1,0,0,0,0,-1],
	[-1,0,0,0,0,-1],
	[-1,-1,-1,-1,-1,-1]
];
var grid_anim_add=[ //for get shrinking animation
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]
];
var grid_anim_move=[ //for cell-moving animation
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]
];
function check_grid(){ //check whether the grid has changed or not
	var count=0;
	for (var i=0;i<4;i++){
		for (var j=0;j<4;j++){
			if (grid[i][j]==grid_cpy[i][j]) count++;
		}
	}
	if (count==16) return 0;
	return 1;
}
function ava_move(){ //check wheter the grid can be changed when it is full.
	for (var i=1;i<5;i++){
		for (var j=1;j<5;j++){
			grid_hoge[i][j]=grid[i-1][j-1];
		}
	}
	for (var i=1;i<5;i++){
		for (var j=1;j<5;j++){
			if (grid_hoge[i][j]==grid_hoge[i][j+1]||
				grid_hoge[i][j]==grid_hoge[i][j-1]||
				grid_hoge[i][j]==grid_hoge[i+1][j]||
				grid_hoge[i][j]==grid_hoge[i-1][j])
				return 1;
		}
	}
	return 0;
}
