const form = document.querySelector("form");
const sorvetes = document.querySelector("#sorvetes");
const checkboxes = document.querySelectorAll("input[type=checkbox]");

/* no checkbox, não é possível pelo html tornar required
a ação, pois a caixa obrigaria a pessoa a marcar todas as
opções e não apenas as que ela quer. pra isso, precisamos
criar um JS a parte (linha 39 -> falando pro JS que o forms
pode ser enviado se tiver pelo menos 1 item marcado no 
checkbox) */

// inserindo HTTP Método POST (aula 04 JS Assíncrono)
const sendForm = async (bodyObject) => {
  try {
    // pegar resposta da API usando o fetch. aguarda ele ser
    // concluído
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(bodyObject),
      headers: {
        "Content-type": "application/json",
      },
    });
    // verificar a resposta do fetch e ver se foi concluída.
    if (!resposta.ok) {
      throw new Error("ops, algo deu errado no POST");
    }
    // captura o erro, pega o throw para retornar ele dentro do
    // add event listener e usar dentro do formulário
    // pq o usuário precisa saber se der algum erro
  } catch (err) {
    throw err;
  }
};

// transformar função em assíncrona (async)
form.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  const atLeastOneCheckboxMarked = Array.from(checkboxes).some(
    (item) => item.checked,
  );
  if (atLeastOneCheckboxMarked) {
    /* vai varrer o botão dentro do form e prevenir que
    ele não dê um refresh */
    // estrutura nativa formData -> manusear dados de um form
    const formData = new FormData(form);
    // converter o formData para um objeto JavaScript:
    // entries que usa estrutura chave-valor. retorna os dados do form
    const body = Object.fromEntries(formData.entries());
    // adaptar para funcionar no checkbox (aparecer +1 seleção)
    body.sorvetes = formData.getAll("sorvetes");
    console.log(body);
    // aqui agora a parte JS Assíncrona:
    try {
      // pra ele aguardar a conclusão acontecer:
      await sendForm(body);
      document.body.innerHTML = "<h1>Forumário submetido com sucesso!</h1>";
      // se capturar o erro, colocar msg de erro:
    } catch (err) {
      document.body.innerHTML =
        "<h1>Algo deu errado ao submeter o formulário</h1>";
    }
  } else {
    const feedback = document.createElement("p");
    feedback.innerText = "preencha ao menos 1 checkbox";
    feedback.style.color = "red";

    sorvetes.appendChild(feedback);
  }
});

/* .addEventListener submit -> essa não vimos na aula passada, mas é
justamente para submeter formulários.  
linhas 17 até linha 27: 
aqui eu pedi para que, se tiver pelo menos 1 opção marcada, o 
formulário envie e apareça na tela que foi enviado pelo innerHTML.
Se não tiver, que dê o recado de que alguma opção precisa ser preenchida. */

/* OBS: PÓS AULA 04 JS ASSÍNCRONO -> INCORPORANDO O  'POST' 
INSERIDO APÓS A LINHA 20 */
