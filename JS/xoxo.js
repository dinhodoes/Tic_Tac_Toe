
//Defines Module
var xoxoApp = angular.module('xoxoApp', ['firebase']); 
xoxoApp.controller('GameController', function ($scope, $firebase) { 


$scope.clickCounter = $firebase(new Firebase('https://xoxo.firebaseio.com/' + 'clickCounter'));
$scope.clickCounter.$add({clickCount: 7});


var xoxoDataRef = new Firebase('https://xoxo.firebaseio.com/'); 


$scope.remoteCellList = $firebase(new Firebase("https://xoxo.firebaseio.com" + "/remoteCellList"));


$scope.boxes = ['','','','','','','','',''];
$scope.player = 1;


	$scope.remoteCellList.$bind($scope, "boxes");
$scope.$watch('boxes', function() {
    console.log('Model changed!') ;
  });


	var combos = [
		[0,1,2],[3,4,5],[6,7,8],[0,3,6],
		[1,4,7],[2,5,8],[0,4,8],[2,4,6]
	];

	// Checking to see if there's a winner
	$scope.check = function() {
	 	for (var i = 0; i < combos.length; i++) {
	 		var xcount = 0;
			var ocount = 0;
	 		for (var j = 0; j < combos[i].length; j++) {
	 			if ($scope.boxes[combos[i][j]] == 'X') {
	 				xcount += 1;
	 					if (xcount == 3)
	 						$scope.xwins = 'x';	 						
	 			} else if ($scope.boxes[combos[i][j]] == 'O') {
	 				ocount += 1;
	 					if (ocount == 3) {
	 						$scope.owins = 'o';
	 					}
	 			}
	 		}
		}			
	};
	// Reset Function
	$scope.reset = function() {
		$scope.boxes = ['','','','','','','','',''];
		$scope.player = 1;
		$scope.xwins = '';
		$scope.owins = '';
	};
	// Clicking buttons 
	$scope.clickBtn = function(btn) {
		if ($scope.boxes[btn] == '') {
	 		if ($scope.player == 1) {
	 			$scope.boxes[btn] = 'X';
	 			$scope.player -= 1;
	 		} else {
	 			$scope.boxes[btn] = 'O';
	 			$scope.player += 1;
	 		};
	 		$scope.check();
	 	};	
	};
	
});   
 