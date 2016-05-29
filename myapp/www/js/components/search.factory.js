'use strict';

//declaring search module
var searchModule = angular.module('search',[]);

searchModule.factory('SearchFactory',SearchFactory);

function SearchFactory($ionicScrollDelegate){
  var factory = {
    data : [],
    //using object, so that text input can work with two way data binding
    query : {'value': ''},
    //to check if query changed
    lastQuery : {'value': ''},
    //search method will increment it in every call
    page : 0,
    //used for telling infiniteScroll when stop loading more
    hasMoreData : false,
    //search method
    search : search,
    //method to be overwriten, should receive query and page as parameter
    queryData : queryData,
    //will be called whenever the query completes
    queryHasCompleted: queryHasCompleted
  };
  return factory;

  //will be called by searchbar
  function search(){
    //make sure query is not empty
    if (!factory.query.value) {
      return;
    }
    //if query has changed, return to page 1, else increment it
    factory.page = (factory.query == factory.lastQuery) ?  factory.page + 1 : 1;

    factory.queryData(factory.query.value,factory.page).then(success, error);
  }

  function success(newData){
    //if query hasn't change, just append new array, else replace the current with the new
    if(factory.query == factory.lastQuery){
      //append new array to current array
      factory.data = factory.data.concat(newData);
    }else{
      factory.lastQuery = factory.query;
      factory.data = newData;
      $ionicScrollDelegate.scrollTop();
    }

    //after last page the result will be an empty array and we don't need load anymore
    factory.hasMoreData = newData.length > 0;

    factory.queryHasCompleted();
  }

  function error(error){
    console.error(error);
  }

  //function to be overwriten
  function queryHasCompleted(){
    //tell the caller about this function
    console.log('you are not implemeting queryHasCompleted');
  }
  //function to be overwriten, should return a promise
  function queryData(queryValue, page){
    throw 'you must implement your own queryData method for SearchFactory. \n It should receive query and page as parameters';
  }

}
