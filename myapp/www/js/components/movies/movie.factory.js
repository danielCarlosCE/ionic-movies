'use strict';
angular
  .module('movie')
  .factory('MovieFactory', MovieFactory);

//factory to query movies using themoviedb API
function MovieFactory(RequestFactory) {

  //public api
  var factory = {
    getMovies: getMovies,
    getUpcoming: getUpcoming,
    search: search
  };

  return factory;

  //return popular movies, 20 per time
  //page: used for pagination
  function getMovies(page) {
    return RequestFactory.request('movie/popular', page);
  }

  //return upcoming movies, 20 per time
  //page: used for pagination
  function getUpcoming(page){
    return RequestFactory.request('movie/upcoming', page);
  }

  function search(query, page){
    return RequestFactory.request('search/movie',page, [{key:'query',value: query}]);
  }

}
