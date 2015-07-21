angular.module('App')
.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'pages/HomePage.html'
	})
	.state('home.description', {
		url: 'description',
		template: ' TEST '
	})
	.state('cart', {
		url: '/cart',
		templateUrl: 'pages/ShoppingCart.html'
	})
})