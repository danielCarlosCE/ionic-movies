'use strict';

//retriving people module
var peopleModule = angular.module('people');

peopleModule.controller('PersonDetailsController',PersonDetailsController);

function PersonDetailsController($scope, $stateParams){
    $scope.person = $stateParams.person;
}
