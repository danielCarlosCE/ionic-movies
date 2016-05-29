'use strict';

//declaring people module
var peopleModule = angular.module('people',['navigation','request','search']);

peopleModule.controller('PopularPeopleController',PopularPeopleController);

function PopularPeopleController($scope, PeopleFactory, NavigationFactory){
    $scope.navigation = NavigationFactory;
    $scope.people = [];

    //loadMore method will increment $scope.page in every call
    $scope.page = 1;
    //used for telling infiniteScroll when stop loading more
    $scope.hasMoreData = false;

    $scope.loadMore = function(){
        $scope.page += 1 ;
        load();
    }

    function load(){
        PeopleFactory.getPopularPeople($scope.page)
        .then(success,error);
    }
    //load the first page
    load();

    function success(people){
        //append new array to current array
        $scope.people = $scope.people.concat(people);

        //after last page the result will be an empty array and we don't need load anymore
        $scope.hasMoreData = people.length > 0;

        //inform that the load is done and the infiniteScroll can complete
        $scope.$broadcast('scroll.infiniteScrollComplete');
    }
    function error(error){
        console.log(error);
    }



}
