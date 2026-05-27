/* const calcularSoma = function (valor1, valor2) {
    return valor1 + valor2;
}
*/ 
const valor1 = 10;
const valor2 = 20;

const resultadoSoma = calcularSoma(valor1, valor2);

console.log('O resultado da soma de ${valor1} + ${valor2}: ${resultadoSoma}');

// vamos evoluir esse exemplo para como converter pra uma função com Arrow function.
// símbolo do arrow function: => 
const calcularSoma = (valor1, valor2) => {
}

/* quando tiver apenas uma linha de código sendo executada dentro do bloco da função,
nem precisa das chaves. Se tirar as chaves, tbm pode tirar o "return", porque o programa
já entende que é algo que precisa ser retornável */

// muito útil pra pequenas funções que realizarão pequenas coisas.

/* funções que recebem apenas um parâmetro:
*/

const imprimir = (impressao) => console.log(impressao);

// se for apenas uma linha, tbm pode tirar o parênteses do (impressao)

imprimir("Olá Mundo");
