var app = angular.module("TetrisFront", [ 'ngRoute', 'ngResource' ]);

app.constant("API_URL", "http://192.168.1.93:8080/TetrisVersionJSP/API/");

app.run(['$rootScope','$location', 'loginF', function($rootScope, $location, loginF) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, previousRoute) {
    var toLogin = true;

    if (nextRoute.originalPath) {
      toLogin = nextRoute.originalPath.indexOf('/login') !== -1;
    }

    if (!toLogin && !loginF.isLogged()) {
      event.preventDefault();
      $location.path('/login');
    }
  });
}]);
