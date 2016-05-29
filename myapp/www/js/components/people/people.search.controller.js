'use strict';

//retriving people module
var peopleModule = angular.module('people');

peopleModule.controller('PeopleSearchController',PeopleSearchController);

function PeopleSearchController($scope, PeopleFactory,NavigationFactory, SearchFactory){
    $scope.navigation = NavigationFactory;
    $scope.searchFactory = SearchFactory;

    //function that will be called when user searches
    $scope.searchFactory.queryData = PeopleFactory.searchPeople;
    //function that will be called whenever query completes
    $scope.searchFactory.queryHasCompleted = queryHasCompleted;

    function queryHasCompleted(){
        //inform that the load is done and the infiniteScroll can complete
        $scope.$broadcast('scroll.infiniteScrollComplete');
    }

    //start page with popular people
    PeopleFactory.getPopularPeople().then(success, error);

    function success(people){
        $scope.searchFactory.data = people;
    }

    function error(error){
        console.log(error);
    }
}
