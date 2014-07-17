var xoxoApp = angular.module('xoxoApp', ['ngRoute']);

var player = 1


// xoxoApp.controller('GameController', function ($scope) {
//   $scope.game = [
//     {},

//});
function clickBox(box) {
	var currentBox = document.getElementById(box);

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
	