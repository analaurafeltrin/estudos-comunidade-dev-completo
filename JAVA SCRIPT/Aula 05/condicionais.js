// em certos momentos, só queremos rodar um estilo de código se as condições forem satisfeitas.

const idadeMaria = 16;
const maioridade = 18;

console.log("Maria pode dirigir? ", idadeMaria >=18);

// como colocar isso dentro de uma condição? usando o if

if(idadeMaria>=18) {
    console.log("Maria pode dirigir");
} else {
    const anosFaltantes = maioridade - idadeMaria;
    console.log("Maria NÃO pode dirigir");
    console.log("Faltam", anosFaltantes + " anos para Maria poder dirigir.");
}

// colocando o if, o código só vai rodar e aparecer no console do html se o resultado for true. Precisa colocar a condição que tem que ser true.
// colocando o else, diz o que nosso código deve executar caso a expressão seja false. Pra executar o oposto do if.
// a variável de anos faltantes é apenas pra mostrar que é possível acreditar outras propriedades dentro do else.

// outra forma: Operadores ternários

idadeMaria >= maioridade 
 ? console.log("Maria pode dirigir") // ? significa caso sim, execute tal 
 : console.log("Maria NÃO pode dirigir"); // : significa caso não, execute tal. 

// essa forma é mais comumente usada se não for declarada muita informação sobre o código. código mais simples e enxuto.

/* -----------------------------------------------------------------------------------------------------------------------------------
considerando:
0 a 12 anos -> infância
13 a 17 anos -> adolescência
18 a 25 anos -> jovem adulto
26 a 60 anos -> adulto
mais que 60 anos -> idoso
*/ 

const idadePessoa = 55;

if (idadePessoa >= 0 && idadePessoa <= 12) {
    console.log("Infância"); 
    //nesse caso, existem várias condições para serem satisfeitas, só o else não será o suficiente. Então:
} else if (idadePessoa >= 13 && idadePessoa <= 17) {
    console.log("Adolescência");
} else if (idadePessoa >= 18 && idadePessoa <= 25) {
    console.log("Jovem adulto");
} else if (idadePessoa >= 26 && idadePessoa <= 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}
/* CUIDADO: na hora de fazer essas validações, tem que ser (idadePessoa >= 0 && idadePessoa <= 12).
NÃO PODE SER (idadePessoa >= 0 && <= 12), porque sempre precisa explicar exatamente as condições.
pq fazer vários "else" e não vários "if"?

if (idadePessoa >= 0 && idadePessoa <= 12) {
    console.log("Infância"); 
} if (idadePessoa >= 13 && idadePessoa <= 17) {
    console.log("Adolescência");
} if (idadePessoa >= 18 && idadePessoa <= 25) {
    console.log("Jovem adulto");
} if (idadePessoa >= 26 && idadePessoa <= 60) {
    console.log("Adulto");
} if (idadePessoa >= 61) {
    console.log("Idoso");
}

se fizer esse código, com ifs independentes, também funciona. 
mas tem um porém: quando é assim, assim que ele encontrar uma condição que é verdadeira, ele não vai executar
o resto do código. se o sistema for super complexo, criar do jeito "else if" é mais otimizado.

existem casos em que usar só if seria melhor que o else if. exemplo:
*/ 

const x = 20; 

if (x % 2 === 0) {
    console.log("O número " , x + " é par?");
}

if (x % 5 === 0) {
    console.log("O número " , x + " é múltiplo de 5?");
}
/* ambas as condições são verdadeiras. se elas são verdadeiras e eu preciso mostrar as 2 na tela,
se eu colocar o else não ia dar certo, pois ambas são true e o else faria com que executasse apenas
a primeira parte, pois a condição já foi satisfeita. Ou seja, se as duas forem verdadeiras, os ifs 
funcionam. 
----------------------------------------------------------------------------------------------------------------*/ 

const diaDaSemana = 3;
let nomeDoDia; 

switch (diaDaSemana) {
    case 0: // aqui eu estou dizendo: caso o dia da semana seja o dia 0...
     nomeDoDia = "Domingo";
     break;
    case 1: 
     nomeDoDia = "Segunda";
     break;
    case 2: 
     nomeDoDia = "Terça";
     break;
    case 3: 
     nomeDoDia = "Quarta";
     break;
    case 4: 
     nomeDoDia = "Quinta";
     break;
    case 5: 
     nomeDoDia = "Sexta";
     break;
    case 6: 
     nomeDoDia = "Sábado";
     break;
}

console.log ("Dia da semana " + nomeDoDia); 

/* precisa ter o comando "break" para que o código pare quando chegar no "dia certo", se não, vai executar
todas as linhas de código. PRECISA COLOCAR */ 

