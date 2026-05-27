const idadeBia = 24;
const idadeMatheus = 25;

console.log("Bia é mais velha que Matheus? ", idadeBia > idadeMatheus);
console.log("Matheus é mais velho que Bia? ", idadeMatheus > idadeBia);

console.log("Bia é mais nova que Matheus? " , idadeBia < idadeMatheus);

console.log("Bia tem idade igual ou menor que a de Matheus? ", idadeBia <= idadeMatheus);

const maioridade = 18;

console.log ("Bia é maior de idade? ", idadeBia >= maioridade);

const z = 12
const y = 20
const k = "10"

console.log("O número " + z + " é igual ao número y, z === y");

console.log("O número " + z + " é igual ao número k, z === k");

/* atenção: se fosse "10" com aspas, seria uma string e não um number,
portanto não seria a mesma coisa. O resultado seria false.
e se eu tirar um dos =, ao invés de 3 ===, deixar só 2 ==?
O resultado daria true. Pq?
Pq quando usamos apenas 2 sinais de igual, é uma igualdade frouxa.
3 sinais de igual, igualdade estrita. 
Frouxa = conversão dos tipos de variáveis que estão sendo comparadas. (ex: string e number)
Com isso, ele converteria a string "10" no número 10.
Isso não é muito seguro pro código, pois raramente vai precisar disso.
Tentar evitar usar o == só com 2. 
Dica: tente sempre usar o tipo igualdade ou desigualdade estrita === para evitar problemas no código */

console.log("O número" + z + "é diferente do número " + y, z !== y);

// pra mostrar uma desigualdade estrita: começa com ! == (!==)
// operador de desigualdade frouxa: ! = (!=)

