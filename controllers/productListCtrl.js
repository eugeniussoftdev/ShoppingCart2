	angular.module('App')

	.constant('productListPageCount', 3)
	    .controller('productListCtrl', function($scope, $filter, productListPageCount) {

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


	    })
