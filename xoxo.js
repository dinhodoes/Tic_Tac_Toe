var player = 1

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
	
// module
var xoxoApp = angular.module('xoxoApp', []); 
// defines controller
xoxoApp.controller('GameController', function ($scope) { 
   
    $scope.boxes = []

   });