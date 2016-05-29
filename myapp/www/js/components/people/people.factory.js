'use strict';

//retriving people module
var peopleModule = angular.module('people');

peopleModule.factory('PeopleFactory',PeopleFactory);

function PeopleFactory(RequestFactory){
  var factory = {
    getPopularPeople: getPopularPeople,
    getPerson: getPerson,
    searchPeople: search
  };

  return factory;

  function getPopularPeople(page){
    return RequestFactory.request('person/popular',page);
  }

  function getPerson(personId){
    return RequestFactory.request('person/'+personId,1, [{key:'append_to_response',value: 'images'}]);
  }

  function search(query, page){
    return RequestFactory.request('search/person',page, [{key:'query',value: query}]);
  }


}
