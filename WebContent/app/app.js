var app = angular.module("TetrisFront", [ 'ngRoute', 'ngResource' ]);

app.constant("API_URL", "http://192.168.1.93:8080/TetrisVersionJSP/API/");
app.config(function(tetrisProvider){
  tetrisProvider.setLargeur(10);
  tetrisProvider.setHauteur(20);
  tetrisProvider.setSizeOfTetriminos(25);
})
