angular.module('App')
    .constant('dataUrl', 'json/products.json')
    .controller('storeCtrl', function($scope, $http, dataUrl) {


        $scope.data = {};

        $http.get(dataUrl).success(function(data) {
                console.log(data);
                $scope.data.products = data;
            })
            .error(function(error) {
                $scope.data.products = error;
            })

    })
