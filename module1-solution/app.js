(function () {
'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', lunchCheckController); 

    lunchCheckController.$inject = ['$scope', '$filter']
    function lunchCheckController($scope, $filter) {
        $scope.message = 'Empty items will not be counted';
        $scope.lunchMenu = '';

        $scope.checkLunch = function () {
            var totalItems = $filter('filter')($scope.lunchMenu.split(','), 
                            function (value, i, arr) {return value.trim() != ''}).length;
            if (totalItems > 3) {
                $scope.message = 'Too much!';
            } else if (totalItems == 0) {
                $scope.message = 'Please enter data first';
            } else {
                $scope.message = 'Enjoy!';
            }
        }
    };

})();