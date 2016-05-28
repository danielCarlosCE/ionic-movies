'use strict';

//retriving people module
var peopleModule = angular.module('people');

peopleModule.factory('PeopleFactory',PeopleFactory);

function PeopleFactory($http, $q){
  var factory = {

  };

  return factory;

}
