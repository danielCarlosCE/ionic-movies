'use strict';
angular
  .module('movie')
  .directive('moviePoster', moviePoster);

function moviePoster() {
  return {
    //isolating scope
    scope: {
      movie : '=movie'
    },
    templateUrl: 'js/components/movies/movie-poster.html'
  };
}
