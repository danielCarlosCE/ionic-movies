'use strict';
angular
  .module('movie')
  .controller('MoviesSearchController', MoviesSearchController)

function MoviesSearchController($scope, NavigationFactory) {
  $scope.navigation = NavigationFactory;
  $scope.movies = [  {
      'title': 'X-Men: The retrun of something',
      'release_date': '20/04/2015',
      'poster_path': 'zSouWWrySXshPCT4t3UKCQGayyo.jpg',
      'overview': 'Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
    },
    {
      'title': 'Civil war',
      'release_date': '29/08/2015',
      'poster_path': 'rDT86hJCxnoOs4ARjrCiRej7pOi.jpg',
      'overview': 'Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.'
    },
    {
      'title': 'Deadpool',
      'release_date': '29/06/2015',
      'poster_path': 'inVq3FRqcYIRl2la8iZikYYxFNR.jpg',
      'overview': 'Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue.'
    }];

  $scope.search = function(query){
    $scope.movies = [
      {
        'title': 'X-Men: The retrun of something',
        'release_date': '20/04/2015',
        'poster_path': 'zSouWWrySXshPCT4t3UKCQGayyo.jpg',
        'overview': 'Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
      }
    ];
  }

}
