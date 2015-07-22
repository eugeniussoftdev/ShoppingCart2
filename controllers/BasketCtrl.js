angular.module('App')
    .controller('BasketController', function($scope, cart) {

        $scope.cartData = cart.getProducts();

        $scope.total = function() {
            var total = 0;
            for (var i = 0; i < $scope.cartData.length; i += 1) {
                total += ($scope.cartData[i].price * $scope.cartData[i].counter);
            }
            return total;
        };
        $scope.remove = function(id) {
            console.log(id)
            cart.removeProduct(id);
        };

    })
