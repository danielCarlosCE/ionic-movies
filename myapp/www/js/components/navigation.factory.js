'use strict';

var navigationModule = angular.module('navigation',[]);

navigationModule.factory('NavigationFactory',NavigationFactory);

//Helper factory to avoid duplicating navigation code among controllers
function NavigationFactory($state){
    var factory = {
      goMovieDetail: goMovieDetail,
      goPersonDetail: goPersonDetail
    };

    return factory;
    //receives a movie and pass it as param to movie-detail page
    function goMovieDetail(movie){
      $state.go('app.movie-detail', {
        'movie': movie
      });
    }
    function goPersonDetail(person){
        $state.go('app.person-detail',{
            'person': person
        });
    }
}
