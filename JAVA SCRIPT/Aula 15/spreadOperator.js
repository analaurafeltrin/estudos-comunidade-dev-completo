// exemplo:

const listaBia = ["Maria", "Mariana", "Matheus"];

// a mãe quer reaproveitar as pessoas dessa lista e incluir outras:
// const listaMãeBia = [listaBia[0], listaBia[1], listaBia[2], "Sérgio", "Valdete"];
//funciona, mas muito longo. 

// spread operators em arrays

const listaMãeBia = [...listaBia, "Sérgio", "Valdete"];

/* vc pega tudo que tem dentro de um array e pode inserir outros valores!

quero copiar a lista da Bia:
const listaBia2 = listaBia;

porém, dessa forma, apenas estou referenciando a lista oritinal.
Ou seja, se eu acrescentar um nome com "Push", vai alterar todas as cópias.
ex: listaBia2.push("Leonardo"); --> vai entrar no original tb

como fazer uma cópia do jeito CERTO? alterar somente uma cópia do array:
*/
const listaBia2 = [...listaBia];

// -----------------------------------------------------------------------------

// spread operators em objetos

const professor1 = {
    materia: "Matemática",
    escola: "Escola Bia codes",
    nome: "Beatriz",
}

console.log("Professor 1", professor1);

/* vamos supor que tem um professor 2 de matemática que dá aula na mesma escola.

const professor2 = {
    materia: "Matemática",
    escola: "Escola Bia codes",
    nome: "Marcos",
}
    esse é o jeito trabalhoso. usando o spread operator:
*/

const professor2 = {
    ...professor1,
    nome: "Marcos"
}

/* podemos usar essas formas para criar cópias rasas, ou seja, somente a primeira
 camada dos elementos. Se tiver muitas camadas, vai copiar apenas a 1. 
*/