app.controller("testController", function() {

});

app.directive("helloWorld", function() {
  return {
    restrict: "E",
    template: "<div>Hello, world!</div>"
  };
});
