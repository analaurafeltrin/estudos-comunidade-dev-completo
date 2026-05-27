// ex: imprimir números de 1 a 30 no mês

/*console:

console.log("Dia 1");
console.log("Dia 2");

array:

const x [1, 2, 3, 4]

mto trabalhoso. 

loops: 

FOR */ 

for (let dia = 1; dia <= 30; dia++) { // ++ : operador aritmético de +1 
console.log("Dia", dia); 
}

// WHILE

let dia = 1
while (dia <= 30) {
    console.log("Dia", dia);
    dia++;
}

// DO WHILE

let day = 1;

do{
    console.log("Dia", day);
    day++;
} while (day <= 30);