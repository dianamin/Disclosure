app.controller('addProductCtrl', function($scope, $http) {
	$scope.product = {
		name: "",
		picture: ""
	};

	$scope.addProduct = function() {
		var data = JSON.stringify($scope.product);
		$http.post('create', data).then(function() {
			window.location.href = "../../wishlist"
		});
		console.log(data);
	};
});