var app = angular.module("TetrisFront");


app.controller("homeController", function($scope, Page, loginF) {
	Page.setTitle("Accueil");

	$scope.usernameHome = loginF.username;

	$scope.quiEstCe = function() {
		HomeRessource.get();
	}
});



/*
 * Crée un factory permettant de récupérer l'URL
 */
app.factory('HomeRessource', ['$resource', 'API_URL', function($resource, API_URL) {
  return $resource(API_URL + 'account/current', null, {
  });
}]);
