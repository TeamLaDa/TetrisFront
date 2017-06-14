var app = angular.module("TetrisFront");


app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./app/components/home/home.html",
			controller: "homeController"
		})

		.when("/tetris", {
			templateUrl: "./app/components/tetris/tetris.html",
			controller: "tetrisController"
		})

		.when("/login", {
			templateUrl: "./app/components/login/login.html",
			controller: "loginController"
		})

		.when("/partie", {
			templateUrl: "./app/components/partie/partie.html",
			controller: "partieController"
		})

		.when("/score", {
			templateUrl: "./app/components/score/score.html",
			controller: "scoreController"
		});
});
