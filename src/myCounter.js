/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  var myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) { // var por let
    myArray.push(counter); // 0, [2o loop = 2,3], 1, [2o loop = 2,3], 2, [2o loop = 2,3], 3, [2o loop = 2,3]
    for (let anotherCounter = 2; anotherCounter <= 3; anotherCounter += 1) { //  var por let
      myArray.push(anotherCounter); // 2, 3, [volta para o primeiro loop]
    }
  }
  return myArray;
};

module.exports = myCounter;
