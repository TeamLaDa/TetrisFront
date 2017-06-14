var app = angular.module("TetrisFront");


app.controller("homeController", function($scope, Page, loginF, $location) {
	Page.setTitle("Accueil");

	$scope.usernameHome = loginF.getUsername();

	$scope.quiEstCe = function() {
		HomeRessource.get();
	}

	var username = loginF.getUsername;

	$scope.logout = function() {
		loginF.setUsername("");

		$location.path('/login');
	}
});



/*
 * Crée un factory permettant de récupérer l'URL
 */
app.factory('HomeRessource', ['$resource', 'API_URL', function($resource, API_URL) {
  return $resource(API_URL + 'account/current', null, {
  });
}]);
