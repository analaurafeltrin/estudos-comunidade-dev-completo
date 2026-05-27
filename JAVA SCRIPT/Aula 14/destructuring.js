// desestruturação de arrays
//arrays - colchetes
// objetos - chaves

const nomes = ["Maria", "Bia", "Matheus"];

// precisamos pegar cada um desses itens do array e atribuir a variáveis

/* const [nome1, nome2, nome3] = nomes;

console.log("Nome 1", nome1);
console.log("Nome 2", nome2);
console.log("Nome 3", nome3); */

// caso mais complexo:

const casais = [["Maria", "Décio"], ["Matheus", "Bia"]];

const [casal1, casal2] = casais;

console.log("Casal 1", casal1);
console.log("Casal 2", casal2);

// se eu quiser atribuir uma variável para cada nome, ao invés de cada casal:

const [[nome1, nome2], [nome3, nome4]] = casais;
console.log("Nome 1", nome1);
console.log("Nome 2", nome2);
console.log("Nome 3", nome3);
console.log("Nome 4", nome4);

// desestruturação de objetos:

const pessoa = {
    nome: "Maria",
    sobrenome: "Elena",
    familia: ["Décio", "Bia", "Matheus"]
}

// pegar valores de objeto e converter pra uma forma + prática

const {nome, sobrenome, familia} = pessoa;

// se eu quiser mudar o nome das chaves, posso trocar, ex: {nome: primeiroNome, sobrenome: segundoNome....}

console.log(nome, sobrenome, familia);

// podemos ter propriedades que são outros objetos:

const person = {
    nomeCompleto: {
        name: "Maria",
        lastName: "Elena"
    },
    family: ["Décio", "Bia", "Matheus"]
} // como pegar propriedades que estão dentro de outras propriedades dentro do objeto?

const {nomeCompleto: {name, lastName}, family} = pessoa;

// se eu quiser mudar o nome das chaves, posso trocar, ex: {nome: primeiroNome, sobrenome: segundoNome....}

