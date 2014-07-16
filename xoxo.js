var player = 1

function clickBox(box) {
	var currentBox = document.getElementById(box);

//console.log(currentBox.innerHTML === "")
	if (currentBox.innerHTML == "") {
		if(player == 1) {
			currentBox.innerHTML = "X";
			player -= 1;
		}
		else  {
			currentBox.innerHTML = "O";
			player += 1;}
};
};
	