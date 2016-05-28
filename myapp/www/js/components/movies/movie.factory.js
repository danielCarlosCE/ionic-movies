'use strict';
angular
  .module('movie')
  .factory('MovieFactory', MovieFactory)
  .factory('NavigationFactory', NavigationFactory);

//factory to query movies using themoviedb API
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
  //page: used for pagination
  function getMovies(page) {
    return request('movie/popular', page);
  }

  //return upcoming movies, 20 per time
  //page: used for pagination
  function getUpcoming(page){
    return request('movie/upcoming', page);
  }

  //**** private functions ****

  //returns a promise that will be resolved or rejected (asynchronously) based on the return of $http.get request
  //resource: to be added to the BASE_URL
  function request(resource, page){
    //default value of 1 if page is undefined
    page = page ? page : 1;

    var deferred = $q.defer();
    var FINAL_URL = BASE_URL+ resource + '?api_key=' + API_KEY + '&page=' + page;
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

//Helper factory to avoid duplicating navigation code among controllers
function NavigationFactory($state){
    var factory = {
      goMovieDetail: goMovieDetail
    };

    return factory;
    //receives a movie and pass it as param to movie-detail page
    function goMovieDetail(movie){
      $state.go('app.movie-detail', {
        'movie': movie
      });
    }
}
