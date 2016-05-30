'use strict';

var navigationModule = angular.module('request',[]);

navigationModule.factory('RequestFactory',RequestFactory);

//required in every request (using danielcarlos api_key)
var API_KEY = '5e96343f45caede8e82f40f1f45c8a25'
var BASE_URL = "https://api.themoviedb.org/3/";

//Helper factory to avoid duplicating navigation code among controllers
function RequestFactory($http, $q){
  var factory = {
    request: request
  };

  return factory;

  //returns a promise that will be resolved or rejected (asynchronously) based on the return of $http.get request
  //resource: to be added to the BASE_URL
  function request(resource, page, extraParams){
    //default value of 1 if page is undefined
    page = page ? page : 1;

    var deferred = $q.defer();
    var FINAL_URL = BASE_URL+ resource + '?api_key=' + API_KEY + '&page=' + page;
    //add any extra params added
    if ( extraParams ) {
      extraParams.forEach(function(param){
        //make sure the param has key and value properties
        if(param.key && param.value){
          FINAL_URL += '&'+param.key+'='+param.value ;
        }
      });
    }
    $http.get(FINAL_URL)
      .then(
        //success function
        function(response){
          //return the actually resource (e.g. movies), so that the caller can use it right away
          //if has results (array of something), return it, otherwise return data (single data)
          deferred.resolve(response.data.results ? response.data.results : response.data);
        },

        //error function
        function(error){
          //propagate the error to the caller
          deferred.reject(error);
        });
    return deferred.promise;
  }
}
