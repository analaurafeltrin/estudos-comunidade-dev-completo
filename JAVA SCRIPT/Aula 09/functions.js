/* função sem parâmetros, e sem retorno.

function imprimir(){
    console.log("Olá Mundo");
}

imprimir(); 
imprimir(); 
imprimir(); 
imprimir();  // posso chamar quantas vezes eu quiser 
*/ 

function imprimir(impressao){
    console.log(impressao);
}

// imprimir("Olá mundo"); --> aqui eu dei um parâmetro para a função. Tornei um comentário pois, se ficar
// aqui, o programa vai dar erro, já que ali embaixo eu atribuí a função pra uma variável.

function calcularSoma(valor1, valor2){ // coloquei parâmetros
    return valor1 + valor2; // assim, ela vai somar os valores
}

/* forma 1 de imprimir:
const valor1 = 2;
const valor2 = 4;
console.log ("A soma entre ", + valor1, "e ", valor2, "é: ", valor1+valor2);

console.log ("A soma entre ", + valor1, "e ", valor2, "é: ", calcularSoma(54, 60));

forma 2 de imprimir: usando nossa nova função no lugar de console.log: */ 

const valor1 = 2;
const valor2 = 4;
imprimir("A soma entre ", + valor1, "e ", valor2, "é: ", calcularSoma(54, 60));

// qual a MELHOR FORMA de declarar uma função sendo iniciante?

/* expressão de função: converte as funções pra armazenar elas em variáveis.*/

const imprimir = function imprimir(impressao){ // podemos transformar em uma função anônima.
// ficaria assim: function (impressao)
console.log(impressao); 
}

// mesma coisa feita da outra forma, porém, feita como uma variável.
// É mais seguro, para evitar bugs de hoisting, assim não corre o risco do programa 
// utilizar a função imprimir antes dela ser inicializada. 

imprimir("Olá mundo");



