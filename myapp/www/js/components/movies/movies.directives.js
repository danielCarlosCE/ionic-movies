'use strict';
angular
  .module('movie')
  .directive('moviePoster', moviePoster)
  .directive('ngEnter', ngEnter );

function moviePoster() {
  return {
    //isolating scope
    scope: {
      movie : '=movie'
    },
    templateUrl: 'js/components/movies/movie-poster.html'
  };
}

//function that binds return key to a function
//many thanks to this guy: https://gist.github.com/EpokK/5884263
function ngEnter() {
  return function(scope, element, attrs) {
      //listen the keypress event
      element.bind("keydown keypress", function(event) {
          //13 = return key
          if(event.which === 13) {
              scope.$apply(function(){
                //execute the fuction on ngEnter attr
                scope.$eval(attrs.ngEnter);
              });

              event.preventDefault();
          }
      });
  };
}
