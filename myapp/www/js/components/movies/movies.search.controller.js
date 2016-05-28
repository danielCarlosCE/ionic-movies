'use strict';
angular
  .module('movie')
  .controller('MoviesSearchController', MoviesSearchController)

function MoviesSearchController($scope, $ionicScrollDelegate, NavigationFactory, MovieFactory) {
  //to use navigation util methods
  $scope.navigation = NavigationFactory;

  $scope.movies = [];
  //using object, so that text input can work with two way data binding
  $scope.query = {'value': ''};
  //to change layout dynamically
  $scope.isiOS = ionic.Platform.isIOS();

  //used for telling infiniteScroll when stop loading more
  $scope.hasMoreData = false;
  //search method will increment $scope.page in every call
  $scope.page = 0;
  //to check if query changed
  var lastQuery = '';

  //load popular movies to start page
  function loadPopular(){
    MovieFactory.getMovies()
                .then(popularSuccess,error);
  }

  //init page with popular movies
  loadPopular();

  function popularSuccess(movies){
    $scope.movies = movies;
  }

  //search movies using query param
  $scope.search = function(){
    //make sure query is not empty
    if (!$scope.query.value){
      return;
    }
    //if query has changed, return to page 1, else increment it
    $scope.page = $scope.query.value == lastQuery ?  $scope.page + 1 : 1;

    MovieFactory.search($scope.query.value, $scope.page)
                .then(searchSuccess,error);

  }

  function searchSuccess(movies){
    //if query hasn't change, just append new array, else replace the current with the new
    if ($scope.query.value == lastQuery){
      //append new array to current movies array
      $scope.movies = $scope.movies.concat(movies);
    }else{
      lastQuery = $scope.query.value;
      $scope.movies = movies;
      //we don't want use the current scroll position      
      $ionicScrollDelegate.scrollTop();
    }

    //after last page the result will be an empty array and we don't need load anymore
    $scope.hasMoreData = movies.length > 0;

    //inform that the load is done and the infiniteScroll can complete
    $scope.$broadcast('scroll.infiniteScrollComplete');

  }

  function error(error){
    console.error(error);
  }

}
