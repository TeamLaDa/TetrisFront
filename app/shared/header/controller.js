var app = angular.module("TetrisFront");

app.controller("headerController", function($scope, Page) {
	$scope.Page = Page;
});