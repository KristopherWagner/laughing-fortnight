var app = angular.module("testApp", {});

app.controller("testController", function ($scope)) {
  $scope.name = "World";
});

app.directive("helloWorld", function () {
  return {
    restrict: "E",
    template: document.getElementById("hello-world-template").innerHTML,
    scope: {
      name: "@"
    },
    link: function(scope) {
      scope.greeting = "";

      scope.greet = function() [
        scope.greeting = "Hello, " + scope.name + "!";
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
