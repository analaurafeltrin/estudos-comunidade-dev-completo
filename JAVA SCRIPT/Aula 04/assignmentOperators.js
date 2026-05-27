/* informação importante:
mesmo que crie dois arquivos separados, não pode criar variáveis com o mesmo nome. 
Se criei a variedade salário no outro arquivo, aqui eu não posso repetir.
*/ 

const x = 10;

// é o símbolo = . tem outros operadores de atribuição tbm

let salarioAbril = 5000;

salarioAbril = salarioAbril + 3000 // forma 1 

//reatribuir o valor da variável fazendo uma soma, caso eu quisesse mostrar o abono do salário de Abril.

console.log ("O salário de Abril é: ", salarioAbril);

/* outra forma de fazer esse cálculo seria usando o operador de atribuição com adição.
ou seja: */ 

salarioAbril += 3000; // forma 2
console.log("O salário de Abril é: ", salarioAbril);

let salarioMaio = 7000;
 //salarioMaio = salarioMaio - 2000; forma 1

// console.log ("O salário de Maio é: ", salarioMaio);

salarioMaio -= 2000; // forma 2
console.log ("O salário de Maio é: ", salarioMaio);

// obs: variável tem que estar let sempre que for fazer reatribuição
