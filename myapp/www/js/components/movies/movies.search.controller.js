'use strict';
angular
  .module('movie')
  .controller('MoviesSearchController', MoviesSearchController)

function MoviesSearchController($scope, NavigationFactory, MovieFactory) {
  $scope.navigation = NavigationFactory;
  $scope.movies = [];
  $scope.query = '';
  $scope.isiOS = ionic.Platform.isIOS();

  //load popular movies to start page
  function loadPopular(){
    MovieFactory.getMovies().then(success,error);
  }
  //init page with popular movies
  loadPopular();

  //search movies using query param
  $scope.search = function(query){
    //make sure query is not empty
    if (!query){
      return;
    }
    MovieFactory.search(query).then(success,error);
  }

  function success(movies){
    $scope.movies = movies;
  }
  function error(error){
    console.error(error);
  }

}
