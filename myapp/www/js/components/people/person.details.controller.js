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
        $scope.coverPhotoUrl = 'http://image.tmdb.org/t/p/w500/'+person.images.profiles[1].file_path;
        //force recalculating the scroll size
        $ionicScrollDelegate.resize();

    }

    function error(error){
        console.error(error);
    }
}
