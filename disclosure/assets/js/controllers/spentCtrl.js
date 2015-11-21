app.controller('spentCtrl', function($scope, $http) {
	$scope.products = [];
	$scope.userId = "";
	$scope.cost = 0;
	$http({method: 'GET', url: '/product/get'}).success(function(data, status, headers, config) {
		$scope.products = data;
	});


	$scope.addCost = function() {
		var data = "";
		$http.post('../spent/' + $scope.userId + '/' + $scope.cost, data).then(function() {
			alert('Congrats!');
		});
	}

	$scope.reactions = [
		"Wow! Black friday much?",
		"Wow!",
		"Your invest was really good, congrats!",
		"People say you could have spent less on that!",
		"It might have been a little too much"
	];


	$scope.getReaction = function(cost) {
		var reactionIndex = Math.floor(cost / 100);
		if (reactionIndex >= $scope.reactions.length)
			reactionIndex = $scope.reactions.length - 1;
		return $scope.reactions[reactionIndex];
	}
});