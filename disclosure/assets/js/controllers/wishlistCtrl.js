app.controller('wishlistCtrl', function($scope, $http) {
	$scope.products = [];
	$scope.userId;

	console.log($scope.products);
	$scope.newWish = {
		productId: "",
		price: 0,
		priority: 25
	}
	
	$http({method: 'GET', url: '/product/get'}).success(function(data, status, headers, config) {
		$scope.products = data;
		console.log(data);
	});

	$scope.addWish = function(newWish) {
		var data = {
			user_id: $scope.userId,
			product_id: newWish.product_id,
			price: newWish.price,
			priority: newWish.priority
		};

		data = JSON.stringify(data);
		$http.post('../wishlist/create', data).then(function() {
			alert(data);
			window.location.reload();
		});
	}
});