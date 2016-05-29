'use strict';
//retriving the movie module
var movieModule = angular.module('movie');

movieModule.controller('MoviesPopularController', MoviesPopularController);

function MoviesPopularController($scope, $controller, MovieFactory) {
  //method that will be called from MoviesBaseController to load movies
  $scope.load =  MovieFactory.getMovies;
  //make MoviesBaseController $scope available
  $controller('MoviesBaseController', {$scope: $scope});

}
