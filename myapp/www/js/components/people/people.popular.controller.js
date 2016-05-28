'use strict';

//declaring people module
var peopleModule = angular.module('people',[]);

peopleModule.controller('PopularPeopleController',PopularPeopleController);

function PopularPeopleController($scope, PeopleFactory){

}
