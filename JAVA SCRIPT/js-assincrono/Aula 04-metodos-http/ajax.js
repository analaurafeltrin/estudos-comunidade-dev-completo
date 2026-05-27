const getPosts = async () => {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dados = await resposta.json();
    if (!resposta.ok) {
      throw new Error("ops, algo deu errado no GET");
    }
    console.log("Dados do GET: ", dados);
  } catch (err) {
    console.log(err);
  }
};

getPosts();

// obs: toda API tem suas especificações, SEMPRE ler para saber
// como programar.

/* OUTROS MÉTODOS HTTP
Usa para se comunicar com algum servidor (back-end), 
através das APIs, para enviar / editar / obter dados.

Sempre que obtemos um fulfilled, o status sempre inicia
com o número 2. 

Se o erro começar com 4, o erro é pro lado do dev (eu):
404 -> erro na rota - não encontrada
403 -> erro de permissão - rota encontrada, mas vc não tem 
permissão para acessar ela. Precisaria passar outra config. na 
header da requisição p/ conseguir acessar.
401 -> falha na autenticação ou credenciais (site expirou, algo
assim)
400 -> erro genérico - back-end não especifica o que foi feito
de errado.  O servidor não entende a requisição, geralmente por 
falha na sintaxe do JSON, campos ausentes ou dados mal formatados.

Se o erro começar com 5, o erro é pro lado do servidor (back-end):
500 -> erro genérico - deu ruim no back-end, algo foi esquecido
503 -> serviço indisponível

-> Outros foram vistos nas aulas anteriores: método GET,
método FETCH

O padrão default do JS, se não especificarmos o método,
é utilizar o método http de GET.

-> MÉTODO GET: utiliza para buscar dados. 

getPosts ();

-> MÉTODO POST: enviar dados para o back-end através da API.
Normalmente, os dados que enviamos são utilizados para criar
novos registros em banco de dados.

Colocar a "," indica segundo parâmetro, passando um objeto com
algumas informações como: o método (post), body (conteúdo que
queremos enviar para a API - title, body, user Id) 

*/

const publishNewPost = async () => {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      // JSON.stringify -> precisa disso para que transforme em uma
      // string de JSON e daí a API vai entender o envio dos dados.
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const dados = await resposta.json();
    if (dados.error) {
      throw new Error(data.error);
    }
    if (!resposta.ok) {
      throw new Error("ops, algo deu errado no POST");
    }
    console.log('resposta do POST: ", dados');
  } catch (err) {
    console.log(err);
  }
};

/* MÉTODO PUT -> alterar algum registro do banco de dados.
No exemplo atual, seria por exemplo alterar algum post específico.
no caso dessa API, especificar na URL (/1).
Se eu não especificasse, poderia dar um erro 404 (rota não 
encontrada). Tbm pode acontecer quando digita algo errado

não muda muita coisa do POST, apenas que muda o nome pra PUT.
*/

const editPost = async () => {
  try {
    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json",
        },
      },
    );
    const dados = await resposta.json();
    if (dados.error) {
      throw new Error(data.error);
    }
    if (!resposta.ok) {
      throw new Error("ops, algo deu errado no PUT");
    }
    console.log('resposta do PUT: ", dados');
  } catch (err) {
    console.log(err);
  }
};

/* MÉTODO PATCH -> parecido com o PUT. Também edita 
registros no banco, mas geralmente apenas uma propriedade.
No PUT, a gente troca várias propriedades.

*/

const editPostTitle = async () => {
  try {
    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PATCH",
        body: JSON.stringify({
          // vc só passa o valor que vc quer alterar, nessa caso, o title.
          title: "foo",
        }),
        headers: {
          "Content-type": "application/json",
        },
      },
    );
    const dados = await resposta.json();
    if (dados.error) {
      throw new Error(data.error);
    }
    if (!resposta.ok) {
      throw new Error("ops, algo deu errado no PATCH");
    }
    console.log('resposta do PATCH: ", dados');
  } catch (err) {
    console.log(err);
  }
};

/* MÉTODO DELETE -> deletar um registro.
Só passa o método delete
 */

const deletePost = async () => {
  try {
    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
    // só passa o método.
        method: "DELETE",
        }),
    const dados = await resposta.json();
    if (dados.error) {
      throw new Error(data.error);
    }
    if (!resposta.ok) {
      throw new Error("ops, algo deu errado no DELETE");
    }
    console.log('resposta do DELETE: ", dados');
  } catch (err) {
    console.log(err);
  }
};

deletePost();
