'use strict';

angular
  // Injetando  esse controller dentro do modulo 'user'
  // observe que nao temos a virgula com os cochetes .module('user',[])
  // ou seja  não estamos declarando um modulo mais sim setando dependencias dentro de um modulo já existente )
  .module('user')
  .controller('UserShowController', UserShowController)

function UserShowController($scope, $stateParams) {
  $scope.user = {};
  // Carregando o usuario que foi passado como parametro pela listagem
  function loadUser() {
    $scope.user = $stateParams.parametro;
  }
  loadUser();
}
