var player = 1

function clickBox(box) {
	if(player == 1) {
		document.getElementById(box).innerHTML = "X";
		player -= 1;
	}
	else  {// work on this line
		document.getElementById(box).innerHTML = "O";
		player += 1;}
};


	
