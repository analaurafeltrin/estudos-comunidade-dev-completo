/* DOM: Document Objective Model
Interface de programação usada para manipular elementos HTML 
de forma dinâmica
Pode alterar e remover elementos através do JS sem precisar 
mudar no HTML */

// get element by id:
// usamos isso para alterar o elemento pelo id dele

const selectCustomTitle = document.getElementById("customTitle");

console.log("Título selecionado:", selectCustomTitle);

// get element by tag name:
// selecionar todos os elementos tag do doc de uma vez

const selectButtons = document.getElementsByTagName("button");

console.log("Botões da página:", selectButtons);

// get elements by class name:
// selecionar todos os elementos que tenham a mesma classe,
// mesmo que não sejam da mesma tag

const selectBoldTexts = document.getElementsByClassName("boldText");

console.log("Textos em bold:", selectBoldTexts);

/* query selector:
serve pra qualquer um dos três acima.
seleciona o primeiro elemento que ele encontrar que tenha
o que estamos procurando, como no exemplo abaixo, que trouxe
primeiro o button, por ser o primeiro com a classe boldText*/

const boldText = document.querySelector(".boldText");

console.log("Bold texts", boldText);

/* query selector all:
vai trazer todos os elementos que ele encontrar */

const allBoldText = document.querySelectorAll(".boldText");

console.log("All bold texts", allBoldText);
