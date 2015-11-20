app.controller('wishlistCtrl', function($scope, $http) {
	$scope.products = [];
	$scope.wishes = [];
	$scope.userId;

	console.log($scope.products);
	$scope.newWish = {
		product: {},
		price: 0,
		priority: 25
	}
	
	$http({method: 'GET', url: '/product/get'}).success(function(data, status, headers, config) {
		$scope.products = data;
		console.log(data);
	});

	$scope.setProduct = function(product) {
		$scope.newWish.product = product;
		console.log(product);
	}

	$scope.findProduct = function(id) {
		for (var i = 0; i < $scope.products.length; i++)
			if ($scope.products[i].id == id) return $scope.products[i];
	}


	$http({method: 'GET', url: '../wishlist/get'}).success(function(data, status, headers, config) {
		$scope.wishes = data;

		for (var i = 0; i < $scope.wishes.length; i++) {
			$scope.wishes[i].product = $scope.findProduct($scope.wishes[i].product_id);
			$scope.wishes[i].delay = $scope.setDelay();
		}
	});


	$scope.addWish = function(newWish) {
		var data = {
			user_id: $scope.userId,
			product_id: newWish.product.id,
			price: newWish.price,
			priority: newWish.priority
		};

		data = JSON.stringify(data);
		$http.post('../wishlist/create', data).then(function() {
			$http({method: 'GET', url: '../wishlist/get'}).success(function(data, status, headers, config) {
				$scope.wishes = data;

				for (var i = 0; i < $scope.wishes.length; i++){
					$scope.wishes[i].product = $scope.findProduct($scope.wishes[i].product_id);
					$scope.wishes[i].delay = $scope.setDelay();
				}
			});
			$scope.newWish = {
				product: {},
				price: 0,
				priority: 25
			}
		});
	}

	$scope.setDelay = function() {
		return Math.floor(Math.random() * 5 + 1);
	}
});