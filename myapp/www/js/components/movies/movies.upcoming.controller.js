'use strict';
angular
  .module('movie')
  .controller('MoviesUpcomingController', MoviesUpcomingController)

function MoviesUpcomingController($scope, $state) {
  //mocked movies for testing view
  $scope.movies = [
    {
      'original_title': 'X-Men: The retrun of something',
      'release_date': '20/04/2015',
      'backdrop_path': 'zSouWWrySXshPCT4t3UKCQGayyo.jpg',
      'overview': 'Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
    },
    {
      'original_title': 'Civil war',
      'release_date': '29/08/2015',
      'backdrop_path': 'rDT86hJCxnoOs4ARjrCiRej7pOi.jpg',
      'overview': 'Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.'
    },
    {
      'original_title': 'Deadpool',
      'release_date': '29/06/2015',
      'backdrop_path': 'inVq3FRqcYIRl2la8iZikYYxFNR.jpg',
      'overview': 'Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue.'
    }
  ];

  // Função que passa um objeto movie como parametro para a proxima view
  $scope.goState = function(movie) {
    $state.go('app.movie-detail', {
      'movie': movie
    });
  }
}
