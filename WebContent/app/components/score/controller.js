var app = angular.module("TetrisFront");


/*
 * Crée le controller pour la page score
 */
app.controller("scoreController", function($scope, Page, $routeParams, ScoreRessource) {
	Page.setTitle("Meilleurs scores");

  $scope.scores = ScoreRessource.query();




});



/*
 * Crée un factory permettant de récupérer l'URL
 */
app.factory('ScoreRessource', ['$resource', 'API_URL', function($resource, API_URL) {
  return $resource(API_URL + 'score', null, {
    'add': { method: 'PUT'}
  });
}]);
