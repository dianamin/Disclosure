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
});