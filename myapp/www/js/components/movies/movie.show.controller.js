'use strict';
angular
// Injetando  esse controller dentro do modulo 'user'
// observe que nao temos a virgula com os cochetes .module('user',[])
// ou seja  não estamos declarando um modulo mais sim setando dependencias dentro de um modulo já existente )
  .module('movie')
  .controller('MovieShowController', MovieShowController)

function MovieShowController($scope, $stateParams) {
  $scope.movie = {};
  // Carregando o usuario que foi passado como parametro pela listagem
  function loadMovie() {
    console.log($stateParams.parametro);
    $scope.movie = $stateParams.parametro;
  }
  loadMovie();
}
