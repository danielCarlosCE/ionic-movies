'use strict';
//creating the movie module and injecting needed modules
var movieModule = angular.module('movie', ['ngCordova','navigation', 'request', 'search']);

movieModule.controller('MoviesBaseController', MoviesBaseController);

function MoviesBaseController($scope,MovieFactory,NavigationFactory) {
  //to use navigation util methods
  $scope.navigation = NavigationFactory;

  //mocked movies for testing view
  $scope.movies = [];
  //loadMore method will increment $scope.page in every call
  $scope.page = 1;
  //used for telling infiniteScroll when stop loading more
  $scope.hasMoreData = false;

  //will be called whenever the user is close to the bottom of the page
  //(automatically called the first time since there's no movie on page, therefore the user is 'close to the bottom of the page')
  $scope.loadMore = function() {
    $scope.page += 1;
    load();
  }

  //used to get movies - should be declared in 'child' controller
  function load(){
    $scope.load($scope.page).then(success,error);
  }

  //load the first page
  load();

  function success(movies){
    //append new array to current movies array
    $scope.movies = $scope.movies.concat(movies);

    //after last page the result will be an empty array and we don't need $scope.load anymore
    $scope.hasMoreData = movies.length > 0;

    //inform that the load is done and the infiniteScroll can complete
    $scope.$broadcast('scroll.infiniteScrollComplete');
  }

  function error(error){
    console.error(error);
  }
}
