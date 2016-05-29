'use strict';
//retriving search module
var searchModule = angular.module('search');

searchModule.directive('searchBar',searchBar);

function searchBar(){
  return {
    restrict: 'E',
    scope: false,
    replace: true,
    templateUrl: 'templates/searchbar.html'
  }
}
