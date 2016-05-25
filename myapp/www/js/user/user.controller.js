'use strict';
angular
  // Criando um modulo chamado user e habilitando a injeção de dependêcia
  .module('user', [])
  // atribuindo um controller (primeiro parametro é o nome do controller e o segundo é uma função de mesmo nome)
  .controller('UserController', UserController)
// Injetando as dependecias $scope $state e a factory UserFactory dentro do controller
function UserController($scope, $state, UserFactory) {
  // Criando uma variavel de scopo chamada users e já atribuindo um valor a ela
  $scope.users = [];

  function loadUsers() {
    // Chamada da factory utilizando promise
    UserFactory.getUsers()
      .then(
        // função de sucesso
        function(response) {
          $scope.users = response.data;
        },
        // função de erro
        function(error) {
          console.log(error);
        }
      )
  }
  // Função que passa um objeto usuario como parametro para a proxima view
  $scope.goState = function(user) {
    $state.go('app.user', {
      'parametro': user
    });
  }

  // Chamada da função loadUsers
  loadUsers();
}
