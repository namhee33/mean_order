myApp.config(function($routeProvider){

	 $routeProvider
	 		.when('/', {
	 			templateUrl: './../static/partials/customers.html',
	 			controller: "customersController"
	 		})
	        .when('/customers',{
	            templateUrl: './../static/partials/customers.html',
	            controller: "customersController"
	        })
	        .when('/orders',{
	            templateUrl: './../static/partials/orders.html',
	            controller: "ordersController"
	        })
	        
	        .otherwise({
	          redirectTo: '/'
	        });
})