var app = angular.module("testApp", {});

app.controller("testController", function($scope)) {
$scope.name = "World";
});

app.directive("helloWorld", function() {
    return {
        restrict: "E",
        template: document.getElementById("hello-world-template").innerHTML,
        scope: {
            name: "@"
        },
        link: function(scope) {
            scope.greetings = [];

            scope.greet = function() {
                scope.greetings.push("Hello, " + scope.name + "!");
                scope.greetings.push("Hi, " + scope.name + "!");
                scope.greetings.push("Hey, " + scope.name + "!");
            }
        }
    };
});

app.directive("wrapper", function() {
    return {
        restrict: "E",
        template: document.getElementById("wrapper-template").innerHTML,
        transclude: true
    }
});
