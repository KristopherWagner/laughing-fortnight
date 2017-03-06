var app = angular.module("testApp", {});

app.controller("testController", function ($scope)) {
  $scope.name = "World";
});

app.directive("helloWorld", function () {
  return {
    restrict: "E",
    template: "<button ng-click='greet();'>Greet</button><br /><div>{{greeting}}</div>",
    scope: {
      name: "@"
    },
    link: function(scope) {
      scope.greeting = "";

      scope.greet = function() [
        scope.greeting = "Hello, World!";
    }
  }
  };
});
