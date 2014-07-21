var xoxoApp = angular.module('xoxoApp', []); 

xoxoApp.controller('GameController', function ($scope) { 
   
    $scope.boxes = ['','','','','','','','',''];
	var currentBox = 'X';
	$scope.player = 1;

	$scope.clickBtn = function(btn) {
		console.log(btn);
		if ($scope.boxes[btn] == '') {
	 		if ($scope.player == 1) {
	 			$scope.boxes[btn] = 'X';
	 			$scope.player -= 1;
	 		} else {
	 			$scope.boxes[btn] = 'O';
	 			$scope.player += 1;
	 		};
	 	};
	  };
});




    


 