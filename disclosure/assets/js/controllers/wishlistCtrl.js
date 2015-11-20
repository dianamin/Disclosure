app.controller('wishlistCtrl', function($scope, $http) {
	$scope.products = [];
	$scope.wishes = [];
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

	$scope.findProduct = function(id) {
		for (var i = 0; i < $scope.products.length; i++)
			if ($scope.products[i].id == id) return $scope.products[i];
	}


	$http({method: 'GET', url: '../wishlist/get'}).success(function(data, status, headers, config) {
		$scope.wishes = data;


		console.log($scope.wishes);

		for (var i = 0; i < $scope.wishes.length; i++)
			$scope.wishes[i].product = $scope.findProduct($scope.wishes[i].product_id);
		console.log($scope.wishes);
	});

	$scope.addWish = function(newWish) {
		var data = {
			user_id: $scope.userId,
			product_id: newWish.productId,
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