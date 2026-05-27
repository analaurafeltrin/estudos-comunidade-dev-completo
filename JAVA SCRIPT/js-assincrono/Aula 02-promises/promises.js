/* PROMISES
Quando fazemos requisições para alguma API (back-end) 
É um combinado feito que em algum momento será retornado.

Estado inicial: "pending" 
Concluído: "settled" 
É mutável; pode dar certo (fulfilled) ou errado (rejected).

Após ser concluída, se for fulfilled, vai retornar algum valor
Se for rejected, vai retornar com um erro.

Se usa a promise quase sempre que está usando JS Assíncrono.
Ela precisa ser configurada. 

*/

// criando uma variável para fazer uma requisição
// fetch: API nativa do JS. meow facts -> API pública gratuita
// const request = fetch("https://meowfacts.herokuapp.com/");

// console.log(request);

// como pegar o resultado FULFILLED da promise?
/* aqui embaixo estou falando: faz o fetch, depois, receberemos
a resposta. */

const getCatsFacts = () => {
  fetch("https://meowfacts.herokuapp.com/")
    .then((resposta) => resposta.json())
    .then((data) => console.log(data));
};

/* precisa colocar o .json para que a gente consiga ler o que
está na promise. o .json tbm é assíncrono. */

// chamar a função pra ela aparecer
getCatsFacts();

/* OU SEJA, PRA VER OS DADOS DA RESPOSTA:
Pega o fetch, depois, resposta do fetch em .json, depois
pega os dados pra poder ver o conteúdo [casos de sucesso].
*/

/* RESULTADO REJECTED DE UMA PROMISE */

const getHarryPotterHouses = () => {
  fetch("https://potterapi-fedeperin.vercel.app/ptt/houses")
    .then((resposta) => resposta.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      console.log("Harry Potter Houses: ", data);
    })
    .catch((err) => console.log(err));
};

// catch -> capturar erros caso ocorram no processo.
getHarryPotterHouses();

/* como identificar o erro que venha do meu código e não do
console? 

No CONSOLE, ver o "ok" -> true ou false, escreve assim:

if (!resposta.ok) {
console.log("a promise foi rejeitada!")
}
return resposta.json()

ESSE É O MÉTODO MAIS CONVENCIONAL.

usar o throw -> interrompe o código, no caso do nosso exemplo,
se algo der errado e sabemos que dará:   

usar esse comando de erro para que mostre para o usuário
qual o tipo de erro que está acontecendo.

*/
