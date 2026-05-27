// AND, OR E NOT

console.log("Maria foi parada em uma blitz");

const idadeMaria = 18;
const mariaPossuiCNH = false;

// AND ambas as condições de cada lado precisa ser verdade.  
console.log("Maria vai ser presa?", idadeMaria >= 18 && mariaPossuiCNH === false);

console.log("Maria foi para a balada e na entrada precisava mostrar documento");

const mariaPossuiRG = true;
console.log("A Maria levou seu RG? ", mariaPossuiRG);

console.log("Maria é maior de idade?", idadeMaria >= 18);

// OR apenas 1 delas precisa ser verdadeira.
console.log("Maria conseguiu comprovar que é maior de idade?", mariaPossuiCNH === true || mariaPossuiRG === true);

console.log("Maria entrou na balada");

const gostaDeBeber = true;

const mariaGostaDeBeber = !gostaDeBeber; // NOT

// ao colocar o ! na frente de gostaDeBeber, estou colocando uma negação na variável e invertendo o seu valor. 
// ou seja, significa que maria não gosta de beber. 

console.log("Maria gosta de beber? ", mariaGostaDeBeber);
