var app = angular.module("TetrisFront");


/*
 * Crée le controller pour la page score
 */
app.controller("loginController", function($scope, Page, $routeParams, LoginRessource, $location, loginF) {
	Page.setTitle("Authentification");

	$scope.user = {
		username: "",
		password: ""
	};

	$scope.connection = function() {

		var result = LoginRessource.save(this.user, function(){
			if (result === undefined) {
				$location.path('/login');

			} else {
				loginF.username = $scope.user.username;
				$location.path('/');
			}
		});
	}




});



/*
 * Crée un factory permettant de récupérer l'URL
 */
app.factory('LoginRessource', ['$resource', 'API_URL', function($resource, API_URL) {
  return $resource(API_URL + 'account/auth', null, {
  });
}]);
