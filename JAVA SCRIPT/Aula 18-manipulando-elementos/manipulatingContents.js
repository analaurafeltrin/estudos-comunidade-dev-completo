/* ALTERANDO CONTEÚDO DE ELEMENTOS:
INNER HTML E INNER TEXT

inner html:
substitui todo o conteúdo de dentro do elemento
que está sendo selecionado. no caso abaixo, é
uma div. 

se colocassemos por exemplo document.body.innerHTML,
substituiria todo o conteúdo dentro do body!!
*/

const buttonsContainer1 = document.querySelector(".container1");

buttonsContainer1.innerHTML = "<button>Novo Botão</button>";

/* inner text
mudar o texto de um elemento. */

const firstTitle = document.querySelector("h1");

firstTitle.innerText = "Novo Título";

/* ALTERANDO ESTILOS 
usando ".style.proriedade" vc pode mudar o estilo diretamente no JS
sem precisar do CSS.
*/

const buttonsContainer2 = document.querySelector(".container2");

buttonsContainer2.style.backgroundColor = "blue";

/* ALTERANDO ATRIBUTOS DAS TAGS
Reatribuir novos valores pro atributo ID com set atrribute
("ATRIBUTO ADICIONADO", "VALOR")
 */

const lastTitle = document.getElementById("title4");

title4.setAttribute("id", "customTitle");

// outra forma:

const thirdTitle = document.querySelector("h2:nth-of-type(3)");

/* nth-of-type: pseudoclasse que busca o 3º h2 que encontrar no
elemento pai (body) */

thirdTitle.setAttribute("id", "orangeTitle");

/* REMOVER ATRIBUTOS: */

lastTitle.removeAttribute("id");

/* ADICIONAR E REMOVER ELEMENTOS */

const newLastTitle = document.createElement("h3");
// cria, mas não é o suficiente p/ aparecer em tela

newLastTitle.innerText = "Título Novo!";

document.body.appendChild(newLastTitle); // acrescentar na tela

/* pra aparecer na tela precisa criar o texto com inner text */

/* pra adicionar algo dentro de algo
 específico, por exemplo, uma div: */

const newButton = document.createElement("button");
newButton.innerText = "Novo botão";

/* acrescentando estilo no botão com 1 classe:

newButton.setAttribute("class", "styledButton1"); 

acrescentando estilo no botão com +2 classes:

*/

newButton.classList.add("styledButton1", "boldText");

buttonsContainer2.appendChild(newButton);

// colocando cor de fundo e letra:

newButton.style.color = "blue";
newButton.style.backgroundColor = "yellow";

buttonsContainer1.classList.add("styledbutton", "balbla");
