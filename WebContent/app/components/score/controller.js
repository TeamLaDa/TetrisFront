var app = angular.module("TetrisFront");


/*
 * Crée le controller pour la page score
 */
app.controller("scoreController", function($scope, Page, $routeParams, ScoreRessource, loginF) {
	Page.setTitle("Meilleurs scores");

  $scope.scores = ScoreRessource.query();

	$scope.user = loginF.getUsername();





});



/*
 * Crée un factory permettant de récupérer l'URL
 */
app.factory('ScoreRessource', ['$resource', 'API_URL', function($resource, API_URL) {
  return $resource(API_URL + 'score', null, {
    'add': { method: 'PUT'}
  });
}]);
