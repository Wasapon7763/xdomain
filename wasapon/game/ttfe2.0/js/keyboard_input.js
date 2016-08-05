document.onkeydown=keyboardInput;
function keyboardInput(){
	var input=event.keyCode;
	init();
	if (input==37) left();
	if (input==38) up();
	if (input==39) right();
	if (input==40) down();
}
