app.controller('gainCtrl', function($scope, $http) {
	$scope.gained = 1;
	$scope.userId;
	$scope.reaction = [
		"Good start!",
		"Nice, good job!",
		"You are really lucky!",
		"Wow, good job!!!",
		"You are such a good money saver!",
		"You are the best money saver!"
	]

	$scope.getReaction = function(gained) {
		console.log(gained);
		var reactionIndex = Math.floor(gained / 100);
		if (reactionIndex >= $scope.reaction.length)
			reactionIndex = $scope.reaction.length - 1;
		return $scope.reaction[reactionIndex]
	}

	$scope.savingAdvice = [
		"Did you try selling some old things?",
		"Did you try sticking to the list you write before going to shopping?",
		"Did you try inviting friends over instead of going out?",
		"Did you try walking instead of driving?",
		"Did you try buy video games that have a lot of replay value?",
		"Did you try quitting smoking?",
		"Did you try turning off lights?",
		"Did you try torrenting?",
		"Did you try brown bagging your lunch?",
		"Did you try fixing things yourself?",
		"Did you try free events?",
		"Did you try public transportation?",
		"Did you try buying in bulk?",
		"Did you try packing food for road trips?",
		"Did you try eating less meat?",
		"Did you try cheaper products?",
		"Did you try cutting down your vacation spending?",
		"Did you try canceling the cable or satellite channels you don’t watch?",
		"Did you try exercising at home?"
	];

	$scope.queue = [];
	$scope.inQueue = new Array(0);
	$scope.queueLength = 5;

	console.log($scope.savingAdvice.length);

	$scope.chooseAdvice = function() {
		return Math.floor(Math.random() * $scope.savingAdvice.length);
	}

	$scope.pushAdvice = function() {
		var x = $scope.chooseAdvice();
		while ($scope.inQueue[x] == 1) x = $scope.chooseAdvice();
		console.log(x);
		$scope.inQueue[x] = 1;
		$scope.queue.push(x);
	}

	$scope.buildQueue = function() {
		for (var i = 0; i < $scope.queueLength; i++) $scope.pushAdvice();
	}

	$scope.buildQueue();
	
	$scope.manageQueue = function() {
		console.log($scope.queue);
		$scope.inQueue[$scope.queue[0]] = 0;
		$scope.queue.splice(0, 1);
		$scope.pushAdvice();
		$scope.$apply();
		setTimeout(function() {
			$scope.manageQueue();
		}, 6000);
	}

	setTimeout(function() {
		$scope.manageQueue();
	}, 6000);

	$scope.addGain = function() {
		var data = "";
		$http.post($scope.userId + '/' + $scope.gained, data).then(function() {
			window.location.href = "/home";
		});
	}
});