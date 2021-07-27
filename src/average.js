/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (numericArray) => {
  if (numericArray.length === 0) {
    return undefined; // Retornar 'undefined' se array estiver vazio
  }
  let arraySum = 0;
  for (let index = 0; index < numericArray.length; index += 1) {
    if (typeof (numericArray[index]) !== 'number') { // Checar se array recebeu algum valor não-numérico
      return undefined; // Retornar 'undefined'
    }
      arraySum += numericArray[index]; // Somatório do array
  }
  const valueAverage = arraySum / numericArray.length; // Calcular média do array
  return Math.round(valueAverage); // Arredondar valor da média
};

module.exports = average;
