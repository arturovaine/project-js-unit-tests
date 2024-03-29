const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    
    // Teste que o retorno da função é um array.
    const input = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(typeof (input), 'object');
    
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(input.length, 2);
    
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof Object.entries(input), 'object'); // Fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    
    // Teste que os dois objetos são diferentes entre si.
    const products = productDetails('firstProduct', 'secondProduct');
    assert.notDeepStrictEqual(products[0], products[1], 'Produtos iguais!');

    // Teste que os dois productIds terminam com 123.
    const productOne = products[0].details.productId; // Recuperar id do primeiro produto
    const productTwo = products[1].details.productId; // Recuperar id do segundo produto
    assert.deepStrictEqual(productOne.substring(productOne.length - 3), '123');
    assert.deepStrictEqual(productTwo.substring(productTwo.length - 3), '123');
  });
});
