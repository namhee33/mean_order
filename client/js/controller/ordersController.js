myApp.controller('ordersController', function(orderFactory, customerFactory, $scope){
	$scope.orders = [];
	$scope.products = ['Ice Creams', 'Nike Shoes', 'Black Belts', 'Candies'];
	$scope.users = [];
	$scope.new_order = {};
	$scope.user_names = [];

	orderFactory.getOrders(function(data){
		$scope.orders = data;
	});

	customerFactory.getCustomers(function(data){
		$scope.users = data;
		for(var i=0;i<$scope.users.length;i++){
			
			$scope.user_names.push($scope.users[i].name);
		}
		
	});

	$scope.addOrder = function(){
		$scope.new_order.created_at = new Date();
		orderFactory.addOrder($scope.new_order, function(data){
			$scope.orders = data;
			$scope.new_order = {};
			
		});
	}



})