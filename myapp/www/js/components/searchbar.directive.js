'use strict';
//retriving search module
var searchModule = angular.module('search');

searchModule.directive('searchBar',searchBar);
searchModule.directive('ngEnter', ngEnter );

function searchBar(){
  return {
    restrict: 'E',
    scope: false,
    replace: true,
    templateUrl: 'templates/searchbar.html'
  }
}

//function that binds return key to a function
//many thanks to this guy: https://gist.github.com/EpokK/5884263
function ngEnter() {
  return function(scope, element, attrs) {
      //listen the keypress event
      element.bind("keydown keypress", function(event) {
          //13 = return key
          if(event.which === 13) {
              scope.$apply(function(){
                //execute the fuction on ngEnter attr
                scope.$eval(attrs.ngEnter);
              });

              event.preventDefault();
          }
      });
  };
}
