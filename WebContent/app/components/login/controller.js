var app = angular.module("TetrisFront");


/*
 * Crée le controller pour la page score
 */
app.controller("loginController", function($scope, Page, $routeParams, LoginRessource, $location, loginF) {
	Page.setTitle("Authentification");

	$scope.user = {
		username: "",
		password: "",
		id: "",
		nom: "",
		prenom: ""
	};

	$scope.usernameHome = loginF.getUsername();

	$scope.wrong_login = false;


	// Fonction permettant de se connecter
	$scope.connection = function() {

		$scope.wrong_login = true;

		var result = LoginRessource.save(this.user, function(){
			if (result === undefined) {
				$location.path('/login');

			} else {
				loginF.setUsername($scope.user.username);
				loginF.setUser(result.username,result.nom,result.prenom,result.id);
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
