'use strict';
var movieModule = angular.module('movie');

movieModule.controller('MoviesSearchController', MoviesSearchController)

function MoviesSearchController($scope, $ionicScrollDelegate, NavigationFactory, MovieFactory, SearchFactory) {
  $scope.navigation = NavigationFactory;
  $scope.searchFactory = SearchFactory.getInstance();

  //to change layout dynamically
  $scope.isiOS = ionic.Platform.isIOS();

  //function that will be called when user searches
  $scope.searchFactory.queryData = MovieFactory.search;
  //function that will be called whenever query completes
  $scope.searchFactory.queryHasCompleted = queryHasCompleted;

  function queryHasCompleted(){
    //inform that the load is done and the infiniteScroll can complete
    $scope.$broadcast('scroll.infiniteScrollComplete');
  }

  //init page with popular movies
  MovieFactory.getMovies().then(success,error);

  function success(movies){
    $scope.searchFactory.data = movies;
  }
  function error(error){
    console.error(error);
  }

}
