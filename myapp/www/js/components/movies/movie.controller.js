'use strict';
angular
  // Criando um modulo chamado user e habilitando a injeção de dependêcia
  .module('movie', ['ngCordova'])
  // atribuindo um controller (primeiro parametro é o nome do controller e o segundo é uma função de mesmo nome)
  .controller('MovieController', MovieController)
  // Injetando as dependecias $scope $state e a factory MovieFactory dentro do controller
function MovieController($scope, $state, MovieFactory) {
  // Criando uma variavel de scopo chamada users e já atribuindo um valor a ela
  $scope.movies = [];

  function loadMovies() {
    // Chamada da factory utilizando promise
    MovieFactory.getMovies()
      .then(
        // função de sucesso
        function(movies) {
          $scope.movies = movies;
        },
        // função de erro
        function(error) {
          console.log(error);
        }
      )
  }
  // Função que passa um objeto usuario como parametro para a proxima view
  $scope.goState = function(user) {
    $state.go('app.movie', {
      'parametro': user
    });
  }

  // Chamada da função loadMovies
  loadMovies();
}
