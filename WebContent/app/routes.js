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
		.when("/score", {
			templateUrl: "./app/components/score/score.html",
			controller: "scoreController"
		});
});
