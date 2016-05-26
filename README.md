# Teste de ionic
______________
### data de entrega:  28 de maio de 2016
_______________
## Objetivos
o participante terá de criar aplicação partindo desse projeto base, que venha a consumir a aplica de filmes do **[themoviedb](http://docs.themoviedb.apiary.io/)**.

### lista de filmes que vão estrear

 com base no projeto criar a listagem com todos os filmes **Que vão estrear**
 ao clicar em algum filme o usuário devera ser levado a uma tela onde tenham as informações desse filme.

### lista de pessoas populares

  com base no projeto criar a listagem de pessoas **populares**
  ao clicar em alguma  o usuário devera ser levado a uma tela onde tenham as informações dessa pessoa.

##Desafios

### Implementar Social Sharing
utilizar o plugin de share do [ngcordova](http://ngcordova.com/docs/plugins/socialSharing/) para permitir que o usuário compartilhe seus filmes favoritos.

**OBS**:plugins funcionam apenas no device não no navegador.
para quem não tiver como testar no device apenas o código sera avaliado

### Buscar filme por nome
  Implementar busca onde o usuário poderá digitar o nome do filme em um campo de texto e a api irá se existe filme(s) ou não.

**Dica** ver a [documentação do angular](https://docs.angularjs.org/api/ng/directive/ngModel) para associar um campo da view com o controller usando o **ng-model**

  ```
  <div ng-controller="ExampleController">
  <form name="userForm">
    <label>Name:
      <input type="text" name="userName"
             ng-model="user.name"
             ng-model-options="{ getterSetter: true }" />
    </label>
  </form>
  <pre>user.name = <span    ng-bind="user.name()"></span></pre>
  </div>
  ```

### Buscar pessoa por nome

Implementar busca onde o usuário poderá digitar o nome da pessoa em um campo de texto e a api irá se existe pessoa(s) ou não.


## Metodologia e conceitos
o participante deve clonar o projeto base e seguir sua arquitetura para fazer os outros desafios, os links providos contem todas as informações para realizar o projeto.
e recomendável que o participante suba sua aplicação para o Github e faça commits regulares para cada modificação em sua aplicação.
