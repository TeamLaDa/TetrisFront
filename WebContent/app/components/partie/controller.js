var app = angular.module("TetrisFront");


/*
 * Crée le controller pour la page score
 */
app.controller("partieController", function($scope, Page, $routeParams, PartieRessource, $location) {
	Page.setTitle("Liste des parties");

  $scope.parties = PartieRessource.query();
  $('.collapsible').collapsible();

	$scope.jouerNewPartie = function() {
		PartieRessource.add();

		$location.path('/');
	}



});



/*
 * Crée un factory permettant de récupérer l'URL
 */
app.factory('PartieRessource', ['$resource', 'API_URL', function($resource, API_URL) {
  return $resource(API_URL + 'partie', null, {
    'add': { method: 'PUT'}
  });
}]);
