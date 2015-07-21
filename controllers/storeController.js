angular.module('App')
    .constant('dataUrl', 'json/tovar.json' )
    // .constant('dataUrl', 'http://127.0.0.1:8080/ShoppingCartPro/json/product.json' )
    .controller('storeCtrl', function($scope, $http, dataUrl) {


        $scope.data = {};

        $http.get(dataUrl).success(function(data){
            console.log(data);
            $scope.data.products = data;
        })
        .error(function(error){
            $scope.data.products = error;
        })

    })
