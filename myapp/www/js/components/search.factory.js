'use strict';

//declaring search module
var searchModule = angular.module('search',[]);

searchModule.factory('SearchFactory',SearchFactory);

function SearchFactory($ionicScrollDelegate){
  var FactoryInstance = function(){
    this.data  = [],
    //using object, so that text input can work with two way data binding
    this.query  = {'value' : ''},
    //to check if query changed
    this.lastQueryValue  = '',
    //search method will increment it in every call
    this.page  = 0,
    //used for telling infiniteScroll when stop loading more
    this.hasMoreData  = false,
    //search method
    this.search  = search,
    //method to be overwriten, should receive query and page as parameter
    this.queryData  = queryData,
    //will be called whenever the query completes
    this.queryHasCompleted = queryHasCompleted,
    //called when query successfully completes
    this.querySuccess = querySuccess,
    // called when query completes with error
    this.queryError = queryError
  };
  function getInstance(){
    return new FactoryInstance();
  }

  var factory = {
    getInstance: getInstance
  };
  return factory;

  //will be called by searchbar
  function search(){
    //make sure query is not empty
    if (!this.query.value) {
      return;
    }
    //if query has changed, return to page 1, else increment it
    this.page = (this.query.value == this.lastQueryValue) ?  this.page + 1 : 1;

    var refThis = this;
    this.queryData(this.query.value,this.page)
        .then(function(newData){
          refThis.querySuccess(newData);
        }, function(error){
          refThis.queryError(error);
        });
  }

  function querySuccess(newData){
    console.log(this.query);
    //if query hasn't change, just append new array, else replace the current with the new
    if(this.query.value == this.lastQueryValue){
      console.log('same query');
      //append new array to current array
      this.data = this.data.concat(newData);
    }else{
      console.log('new query');
      this.lastQueryValue = this.query.value;
      this.data = newData;
      $ionicScrollDelegate.scrollTop();
    }

    //after last page the result will be an empty array and we don't need load anymore
    this.hasMoreData = newData.length > 0;

    this.queryHasCompleted();
  }

  function queryError(error){
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
