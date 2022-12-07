(function () {
'use strict';

    angular.module('myFirstApp', [])
    .controller('MyFirstController', function ($scope) {
        $scope.name = 'cidus';
        $scope.totalValue = 0;

        $scope.calculate = function () {
            var result = 0;
            var name = $scope.name;
            for (var i = 0; i < name.length; i++) {
                result += name.charCodeAt(i);
            }
            return result;
        }
    });

})();