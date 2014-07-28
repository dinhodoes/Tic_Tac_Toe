
var xoxoApp = angular.module('xoxoApp', ['firebase']); 


// Chat Controller ------------------------------------------------

xoxoApp.controller('chat', ['$scope', '$firebase', function ($scope, $firebase) {

	var xoxoChatRef = new Firebase('https://xoxo.firebaseio.com/'); 
	
	$scope.comments = $firebase(xoxoChatRef.limit(10));

	$scope.username = 'Guest' + Math.floor(Math.random() * 100);
	

		$scope.addComment = function(event){
		if (event.keyCode != 13) return; 
		$scope.comments.$add({
			from: $scope.usename,
			body: $scope.newComment
		});
		$scope.newComment = "";
	}
}]);



// Game Controller ------------------------------------------------

xoxoApp.controller('GameController', function ($scope, $firebase) { 


	$scope.clickCounter = $firebase(new Firebase('https://xoxo.firebaseio.com/' + 'clickCounter'));
	$scope.clickCounter.$add({clickCount: 7});


	$scope.remoteCellList = $firebase(new Firebase("https://xoxo.firebaseio.com" + "/remoteCellList"));


	var xoxoDataRef = new Firebase('https://xoxo.firebaseio.com/'); 



	$scope.boxes = ['','','','','','','','',''];
	$scope.player = 1;
	$scope.x = "Player 1 Turn";
	$scope.y = "Player 2 Turn";
	$scope.count = 0;


	

	$scope.remoteCellList.$bind($scope, "boxes");
	$scope.$watch('boxes', function() {
	    console.log('Model changed!') ;
	  });


	var combos = [
		[0,1,2],[3,4,5],[6,7,8],[0,3,6],
		[1,4,7],[2,5,8],[0,4,8],[2,4,6]
	];


	var xcount = 0;
	var ocount = 0;


	// Checking for Winner
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

	$scope.draw = function() {
		if ($scope.count == 9 && xcount !==3 && ocount !== 3) {
			$scope.tie = 't';
		};
	};

	// Reset Function
	$scope.reset = function() {
		$scope.boxes = ['','','','','','','','',''];
		$scope.player = 1;
		$scope.xwins = '';
		$scope.owins = '';
		$scope.tie = '';
		$scope.count = 0;
		var xcount = 0;
		var ocount = 0;
	};


	// Clicking buttons 
	$scope.clickBtn = function(btn) {
		if ($scope.boxes[btn] == '') {
	 		if ($scope.player == 1) {
	 			$scope.boxes[btn] = 'X';
	 			$scope.player -= 1;
	 			$scope.count += 1;
	 		} else {
	 			$scope.player == 0;
	 			$scope.boxes[btn] = 'O';
	 			$scope.player += 1;
	 			$scope.count += 1;
	 		};
	 		$scope.check();
	 		$scope.draw();
	 	};	
	};


	// Player Turn
	$scope.turn1 = function() {
		if ($scope.player == 1) {
			return true;
		}
	 };

	 $scope.turn2 = function() {
		if ($scope.player == 0) {
			return true;
		}
	 };
	
}); 


 