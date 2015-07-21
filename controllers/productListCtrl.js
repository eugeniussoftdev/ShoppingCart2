	angular.module('App')

	.constant('productListPageCount', 6)
	    .controller('productListCtrl', function($scope, $filter, productListPageCount, cart) {

	        var selectedCategory = null;

	        $scope.selectedPage = 1;
	        $scope.pageSize = productListPageCount;

	        $scope.selectCategory = function(category) {

	            selectedCategory = category;
	        };
	        $scope.selectPage = function(page) {
	            $scope.selectedPage = page;
	        };


	        $scope.catFilterFn = function(product) {

	            return selectedCategory == null ||
	                product.category == selectedCategory;
	        };
	        $scope.addProductToCart = function(product){
	        	cart.addProduct(product.id, product.name, product.price);
	        };


	    })
