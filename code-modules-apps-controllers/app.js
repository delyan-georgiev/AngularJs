// MODULE

var angularApp = angular.module('angularAppView', ['ngMessages', 'ngResource']);

// CONTROLLERS
angularApp.controller('mainController', function ($scope, $log, $filter, $resource) {
    
    $scope.name = 'delyan';
    $scope.formattedName = $filter('uppercase')($scope.name);
    
    console.log($resource);
    
});



