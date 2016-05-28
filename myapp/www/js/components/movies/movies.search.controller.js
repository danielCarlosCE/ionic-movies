'use strict';
angular
  .module('movie')
  .controller('MoviesSearchController', MoviesSearchController)

function MoviesSearchController($scope, NavigationFactory, MovieFactory) {
  $scope.navigation = NavigationFactory;
  $scope.movies = [];
  $scope.query = '';

  //load popular movies to start page
  function loadPopular(){
    MovieFactory.getMovies().then(
      function success(movies){
          $scope.movies = movies;
      },
      function error(error){
          console.error(error);
      }
    );
  }
  //init page with popular movies
  loadPopular();

  $scope.search = function(query){
    MovieFactory.search(query).then(
      function success(movies){
        $scope.movies = movies;
      },
      function error(error){
        console.error(error);
      }
    );
  }

}
