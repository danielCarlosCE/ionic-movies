'use strict';
angular
  .module('user')
  .factory('UserFactory', UserFactory);

function UserFactory($http, $q) {
  // URL DA API PARA QUAL VAMOS FAZER CHAMADAS HTTP
  var URL = 'http://jsonplaceholder.typicode.com/';
  // Instanciando
  var dfd = $q.defer();

  // Declarando os metodos da factory
  var factory = {
    getUser: getUser,
    getUsers: getUsers
  };

  return factory;

  // Função que retorna os usuario
  function getUsers() {
    // Utilizando o modulo $http do angular para fazer o get na api
    $http.get(URL + 'users')
      // chamando as funcoes de sucesso e error no tratamento da promise
      .then(success, error)
    // retornando a promise para o controller
    return dfd.promise;
  }

  function getUser(id) {
    $http.get(URL + 'users/' + id)
      .then(success, error)
    return dfd.promise;
  }

  // funcção de tratamento do sucesso da chamada Http
  function success(response) {
    console.log('Resposta: ', response);
    // retornando a promise resolvida
    dfd.resolve(response);
  }

  // funcção de tratamento do erro da chamada Http
  function error(err) {
    console.log('Erro: ', err);
    // retornando o erro rejeitado pela promise
    dfd.reject(err);
  }

}
