'use strict';

//declaring people module
var peopleModule = angular.module('people',['navigation','request']);

peopleModule.controller('PopularPeopleController',PopularPeopleController);

function PopularPeopleController($scope, PeopleFactory, NavigationFactory){
    $scope.navigation = NavigationFactory;
    $scope.people = [];

    PeopleFactory.getPopularPeople().then(
        function(people){
            $scope.people = people;
        },
        function(error){
            console.log(error);
        }
    );
}
