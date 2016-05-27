// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('moviesApp', ['ionic', 'starter.controllers', 'movie'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppController'
    })

  .state('app.movies', {
    url: '/movies',
    views: {
      'menuContent': {
        templateUrl: 'js/components/movies/_movies.view.html',
        controller: 'MovieController'
      }
    }
  })

  .state('app.upcoming',{
    url: '/upcoming',
    views: {
      'menuContent': {
        templateUrl: 'js/components/movies/_movies.upcoming.view.html',
        controller: 'MoviesUpcomingController'
      }
    }
  })

  .state('app.movie-detail',{
    url: '/movie-detail',
    params: {
      movie : null
    },
    views: {
      'menuContent': {
        templateUrl: 'js/components/movies/_movie-details.view.html'
      }
    }
  })

  .state('app.movie', {
    url: '/movie',
    params: {
      parametro: null
    },
    views: {
      'menuContent': {
        templateUrl: 'js/components/movies/_movies.show.view.html',
        controller: 'MovieShowController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/movies');
});
