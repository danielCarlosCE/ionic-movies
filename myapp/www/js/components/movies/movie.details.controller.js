'use strict';
angular
  .module('movie')
  .controller('MovieDetailsController', MovieDetailsController)

function MovieDetailsController($scope, $stateParams) {
  $scope.movie = $stateParams.movie;
}
