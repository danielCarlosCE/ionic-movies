'use strict';
var movieModule = angular.module('movie');

movieModule.controller('MovieDetailsController', MovieDetailsController)

function MovieDetailsController($scope, $stateParams, $cordovaSocialSharing) {

  //assign the attribute, passed by previous page, to scope variable
  $scope.movie = $stateParams.movie;

  //share movie link via facebook
  $scope.shareViaFacebook = function(){
    //may be ignored by Facebook app
    var optionalMessage = 'Check out this upcoming movie';

    var link = 'https://www.themoviedb.org/movie/'+$scope.movie.id;
    var image = null;

    $cordovaSocialSharing
      .shareViaFacebook(optionalMessage, image, link)
      .then(
        //success function
        function(result) {
          console.log(result);
        },
        //error function
        function(err) {
          console.error(err);
        }
      );
  }
}
