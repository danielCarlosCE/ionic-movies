'use strict';
angular
  .module('movie')
  .controller('MoviesUpcomingController', MoviesUpcomingController)

function MoviesUpcomingController($scope, $state, MovieFactory) {
  //mocked movies for testing view
  $scope.movies = [];
  //loadMore method will increment $scope.page in every call
  $scope.page = 1;
  //used for telling infiniteScroll when stop loading more
  $scope.hasMoreData = false;

  //get movies from factory and append to scope's movies array
  function load(){
    MovieFactory.getUpcoming($scope.page).then(
      function(movies){
          //append new array to current movies array
          $scope.movies = $scope.movies.concat(movies);

          //after last page the result will be an empty array and we don't need load anymore
          $scope.hasMoreData = movies.length > 0;

          //inform that the load is done and the infiniteScroll can complete
          $scope.$broadcast('scroll.infiniteScrollComplete');

      },function(error){
        console.error(error);
      });
  }

  //load the first page
  load();

  //will be called whenever the user is close to the bottom of the page
  //(automatically called the first time since there's no movie on page, therefore the user is 'close to the bottom of the page')
  $scope.loadMore = function() {
    $scope.page += 1;
    load();
  }

  // Get the movie param and send it to movie-detail page
  $scope.goState = function(movie) {
    $state.go('app.movie-detail', {
      'movie': movie
    });
  }
}
