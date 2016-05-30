'use strict';
var movieModule = angular.module('movie');

movieModule.directive('moviesList',moviesList)
movieModule.directive('moviePoster', moviePoster);

function moviesList(){
  return {
    templateUrl: 'js/components/movies/movies-list.html'
  };
}

function moviePoster() {
  return {
    //isolating scope
    scope: {
      movie : '=movie'
    },
    templateUrl: 'js/components/movies/movie-poster.html'
  };
}
