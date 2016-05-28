'use strict';

//declaring people module
var peopleModule = angular.module('people',['navigation']);

peopleModule.controller('PopularPeopleController',PopularPeopleController);

function PopularPeopleController($scope, PeopleFactory, NavigationFactory){
    $scope.navigation = NavigationFactory;
    $scope.people = [
        {  name: 'Scarlett Johansson',
           profile_path: '/8EueDe6rPF0jQU4LSpsH2Rmrqac.jpg'
        },
        {  name: 'Chris Evans',
           profile_path: '/kRlx7PxXkom7Daj8Z2HmcbPQB1o.jpg'
        },
        {  name: 'Shu Qi',
           profile_path: '/tDPS8QHdOmdmu400haPcYum8BHC.jpg'
        }
    ];
}
