var app = angular.module("testApp", {});

app.controller("testController", function($scope)) {
$scope.name = "World";
});

app.directive("helloWorld", function() {
    return {
        restrict: "E",
        template: "<div>Hello, {{name}!</div>",
        scope: {
            name: "@"
        }
    };
});
