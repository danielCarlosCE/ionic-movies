'use strict';
angular
  .module('movie')
  .factory('MovieFactory', MovieFactory);

function MovieFactory($http, $q) {
  // URL DA API PARA QUAL VAMOS FAZER CHAMADAS HTTP
  var apiKey = '?api_key=968cca12b1a8492036b1e1e05af57e3f'
  var URL = "https://api.themoviedb.org/3/";

  // Instanciando
  var dfd = $q.defer();

  // Declarando os metodos da factory
  var factory = {
    getMovies: getMovies
  };

  return factory;

  // Função que retorna os usuario
  function getMovies() {
    // Utilizando o modulo $http do angular para fazer o get na api
    $http.get(URL + 'movie/popular' + apiKey)
      // chamando as funcoes de sucesso e error no tratamento da promise
      .then(success, error)
      // retornando a promise para o controller
    return dfd.promise;
  }

  // funcção de tratamento do sucesso da chamada Http
  function success(response) {
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
