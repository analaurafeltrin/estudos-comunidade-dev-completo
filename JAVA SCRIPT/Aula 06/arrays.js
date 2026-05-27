// console.log("Lista de convidados: Matheus, Amanda, Paula, Isabela, ...") --> assim daria muito trabaloh

/* const convidado1 = "Matheus";
const convidado2 = "Amanda";
tbm funciona, mas acaba sendo trabalhoso.

vamos criar uma váriavel só com todos os nomes dos convidados? ISSO é arrays
*/

const listaDeConvidados = ["Matheus", "Amanda", "Paula", "Isa"];

console.log("Bia fez aniversário e convidou:", listaDeConvidados);

console.log("Quantos convidados?", listaDeConvidados.length); // length pra saber quantos itens tem no array

// descobrir o que tem em cada posição do array:

/* 0. matheus 1; amanda 2; paula 3; isa*/ 

console.log("Convidado número 0:", listaDeConvidados[0]);

//a contagem começa no número 0. 

console.log("Convidado número 4:", listaDeConvidados[3]);

// quero descobrir quantas pessoas vai ter na minha festa. Descobrir a última pessoa:

console.log("Convidado número 4:", listaDeConvidados[listaDeConvidados.length-1]);

// o que estou falando? Pegue a lista de convidados e pegue o mesmo número do tamanho do meu array.
// PRECISA SUBTRAIR 1 porque a posição inicial da linguagem é sempre 0, se não subtrair vai sair indefinido.

console.log("Convidado número 3:", listaDeConvidados[2]);

// assim pra achar o convidado número 3. 

// tenho um nome e quero saber em qual posição desse array o nome está:

const indicePaula = listaDeConvidados.indexOf("Paula");
console.log("Paula está em qual índice do nosso array?", indicePaula);

// aqui estou perguntando qual o número da Paula no nosso array.

console.log("Paula está em qual número da lista?", indicePaula + 1);

// o +1 pra fazer a contagem "real", sem contar o 0 igual a linguagem faz.

/* até agora só colocamos string, mas podemos botar qualquer outra coisa.*/

const arrayQualquer = ["Beatriz", true, 24, {valor1: 10, valor2: 20}]

console.log(arrayQualquer);



