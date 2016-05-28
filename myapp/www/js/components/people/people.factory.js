'use strict';

//retriving people module
var peopleModule = angular.module('people');

peopleModule.factory('PeopleFactory',PeopleFactory);

function PeopleFactory(RequestFactory){
  var factory = {
    getPopularPeople: getPopularPeople,
    getPerson: getPerson
  };

  return factory;

  function getPopularPeople(){
    return RequestFactory.request('person/popular');
  }

  function getPerson(personId){
    return RequestFactory.request('person/'+personId,1, [{key:'append_to_response',value: 'images'}]);
  }

}
