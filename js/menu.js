angular.module('exampleApp')
    .controller('menuCtrl', function ($scope) {
        $scope.links = ['Module', 'Directives','Services'];
    });