'use strict';

//retriving people module
var peopleModule = angular.module('people');

peopleModule.controller('PersonDetailsController',PersonDetailsController);

function PersonDetailsController($scope, $stateParams, $ionicScrollDelegate,PeopleFactory){
    $scope.person = $stateParams.person;
    $scope.coverPhotoUrl = '';
    PeopleFactory.getPerson($scope.person.id)
                .then(success, error);

    function success(person){
        $scope.person = person;
        //check if person has profile images
        if (person.images.profiles.length > 0){
          //if it has more than one, use the second as cover image, otherwise, use the first
          var hasMoreThanOneImage = person.images.profiles.length > 1;
          var coverImage = hasMoreThanOneImage ? person.images.profiles[1] : person.images.profiles[0];
          $scope.coverPhotoUrl = 'http://image.tmdb.org/t/p/w500/'+coverImage.file_path;
        }else{
          //use a default image when person has no profile image
          $scope.coverPhotoUrl  = 'img/no-picture.jpg'
        }
        //force recalculating the scroll size
        $ionicScrollDelegate.resize();

    }

    function error(error){
        console.error(error);
    }
}
