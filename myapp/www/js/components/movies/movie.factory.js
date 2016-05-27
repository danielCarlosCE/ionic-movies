'use strict';
angular
  .module('movie')
  .factory('MovieFactory', MovieFactory);

function MovieFactory($http, $q) {

  //required in every request
  var API_KEY = '968cca12b1a8492036b1e1e05af57e3f'
  var BASE_URL = "https://api.themoviedb.org/3/";

  //public api
  var factory = {
    getMovies: getMovies,
    getUpcoming: getUpcoming
  };

  return factory;

  //return popular movies, 20 per time
  function getMovies() {
    return request('movie/popular');
  }

  //return upcoming movies, 20 per time
  function getUpcoming(){
    return request('movie/upcoming' );
  }

  //**** private functions ****

  //returns a promise that will be resolved or rejected (asynchronously) based on the return of $http.get request
  //resource: to be added to the BASE_URL
  function request(resource){
    var deferred = $q.defer();
    var FINAL_URL = BASE_URL+ resource + '?api_key=' + API_KEY + '&page=1';
    $http.get(FINAL_URL)
      .then(
        //success function
        function(response){
          //return the actually resource (e.g. movies), so that the caller can use it right away
          deferred.resolve(response.data.results);
        },

        //error function
        function(error){
          //propagate the error to the caller
          deferred.reject(error);
        });
    return deferred.promise;
  }




}
