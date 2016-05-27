'use strict';
angular
  .module('movie')
  .controller('MoviesUpcomingController', MoviesUpcomingController)

function MoviesUpcomingController($scope, $state, MovieFactory) {
  //mocked movies for testing view
  $scope.movies = [];

  MovieFactory.getUpcoming().then(function(movies){
    $scope.movies = movies;
  },function(error){
    console.error(error);
  });

  // Função que passa um objeto movie como parametro para a proxima view
  $scope.goState = function(movie) {
    $state.go('app.movie-detail', {
      'movie': movie
    });
  }
}
