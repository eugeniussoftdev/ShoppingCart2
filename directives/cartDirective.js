angular.module('Cart')
.directive('cartBasket', function(cart){
 return {
 	restrict: "AE",
 	templateUrl: "tmpl/basket.html",
 	controller: function($scope){
 		
 		var cartData = cart.getProducts();
 		$scope.total = function(){
 			var total = 0;
 			for(var i = 0; i < cartData.length; i+=1){
 				total += (cartData[i].price * cartData[i].counter);
 			}
 			return total;
 		};
 		$scope.itemCount = function(){
 			var total = 0;
 			for(var i = 0; i < cartData.length; i+=1){
 				total += cartData[i].counter;
 			}
 			return total;
 		}

 	}
 }
})