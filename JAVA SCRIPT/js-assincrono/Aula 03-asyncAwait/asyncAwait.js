/* ASYNC AWAIT

outra forma, mais moderna, de lidar com as promises 

não utiliza o .then

armazena o fetch em variáveis

precisa fazer uma função inteira async (assíncrona)

-> qdo a função for async, await (aguarde) o resultado

-> const dados palpáveis (dados) - o que será retornado
pela API. tbm await a resposta.json

*/

const getHarryPotterHouses = async () => {
  try {
    // 'fetch' faz a requisição HTTP. O 'await' pausa a execução até a rede responder.
    const resposta = await fetch(
      "https://potterapi-fedeperin.vercel.app/pt/houses",
    );
    // .json() transforma o corpo da resposta (bruto) em um objeto JS legível.
    // É uma função, por isso precisa dos parênteses ().
    const dados = await resposta.json();
    // Verifica se a API enviou um objeto contendo uma propriedade de erro.
    if (dados.error) {
      throw new Error(data.error);
    }
    // Verifica se o status da resposta HTTP está na faixa de sucesso (200-299).
    if (!resposta.ok) {
      const status = resposta.status;
      throw new Error("ops, algo deu errado.");
    }
    // Se chegou aqui sem erros, exibe os dados das casas no console.
    console.log("Dados", dados);
    // Se qualquer erro ocorrer no bloco 'try', o código "cai" aqui.
    // O erro (err) é capturado e exibido para o desenvolvedor.
  } catch (err) {
    console.log(err);
  }
};
// Chama a função para iniciar o processo.
getHarryPotterHouses();

/* o TRY E CATCH ERR É PARA VER SE TEM UM ERRO OCORRENDO 

sem o erro: 

const getHarryPotterHouses = async () => {
    const resposta = await fetch("https://potterapi-fedeperin.vercel.app/pt/houses"),
    const dados = await resposta.json;
    console.log("Dados", dados);
}; */
