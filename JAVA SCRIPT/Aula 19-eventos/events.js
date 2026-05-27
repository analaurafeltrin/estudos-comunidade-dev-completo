/* EVENTOS -> Interação do usuário com o site
Formas de capturar ações que iniciaram e foram 
concluídas na página
Relacionados ao mouse e pressionamento do teclado 
ver site  https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events 

PRINCIPAIS EVENTOS DE MOUSE

1º -> alterar no html.

on mouse click,
on mouse enter,
on mouse leave

abaixo: função anônima - aula de funções
*/

const button = document.querySelector("button");

const onMouseClick = () => {
  button.innerText = "clicou!";
};

const onMouseEnter = () => {
  button.innerText = "mouse entrou!";
};

const onMouseLeave = () => {
  button.innerText = "mouse saiu!";
};

/* PRINCIPAIS EVENTOS DE TECLADO 
1º -> no html seria onkeydown
no js é só keydown */

document.body.addEventListener("keydown", (evento) => {
  const novoTexto = document.createElement("h2");
  novoTexto.innerText = `a tecla ${evento.key} foi pressionada!`;
  document.body.appendChild(novoTexto);
});

// append child -> add elemento
// add event listener -> pra "ouvir" o que está acontecendo na pág

/* botão se a gente refatorasse: 
NO HTML: removeria os "on...." de dentro do button.

button.addEventListener("click", (onMouseClick);
button.addEventListener("mouseenter", (onMouseEnter);
button.addEventListener("mouseleave", (onMouseLeave;

diferença é que como ali em cima já foi declarada a função,
não precisou escrever tudo aquilo das linhas 36 até 39.
prática recomendada.
*/
