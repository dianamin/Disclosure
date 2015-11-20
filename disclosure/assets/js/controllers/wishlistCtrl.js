app.controller('wishlistCtrl', function($scope, $http) {
	$scope.products = [];
	$http({method: 'GET', url: ''}).success(function(data, status, headers, config) {
		$scope.products = data;
	});
});