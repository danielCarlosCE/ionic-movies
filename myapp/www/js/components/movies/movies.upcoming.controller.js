'use strict';
angular
  .module('movie')
  .controller('MoviesUpcomingController', MoviesUpcomingController)

function MoviesUpcomingController($scope) {
  //mocked movies for testing view
  $scope.movies = [
    {
      'original_title': 'X-Men: The retrun of something',
      'release_date': '20/04/2015',
      'backdrop_path': 'zSouWWrySXshPCT4t3UKCQGayyo.jpg'
    },
    {
      'original_title': 'Civil war',
      'release_date': '29/08/2015',
      'backdrop_path': 'rDT86hJCxnoOs4ARjrCiRej7pOi.jpg'
    },
    {
      'original_title': 'Deadpool',
      'release_date': '29/06/2015',
      'backdrop_path': 'inVq3FRqcYIRl2la8iZikYYxFNR.jpg'
    }
  ];
}
