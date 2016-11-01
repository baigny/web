angular.module('exampleApp')
    .controller('contentCtrl', function ($scope) {
        $scope.title = "AngularJS";
        $scope.paragraph = "AngularJS commonly referred to as Angular or Angular.js "
        + "is a complete JavaScript-based open-source front-end web application framework  "
        + "mainly maintained by Google and by a community of individuals and corporations"
        + "to address many of the challenges encountered in developing single-page applications.";
        $scope.author = "Nabil";
    });