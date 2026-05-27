const fichaDaBia = {
    nome: "Beatriz",
    idade: 24,
    profissao: "programadora",
    temFilhos: false,
};

console.log(fichaDaBia);

//propriedades são os valores dentro do objeto. abrir a chave {} é o que define como um objeto, porém vazio ainda. 
//se tá dentro do objeto = propriedades, se está fora = variáveis (ex: const)

//formas de imprimir na tela:

console.log("Ficha Da Bia: ", fichaDaBia);

console.log(`fichaDaBia ${fichaDaBia}`);

console.log('A'+'B') // concatenação. junta a string como uma só. 
// se tiver 1 string, mesmo que o outro 1 seja um número, é uma concatenação.

console.log('Nome:' + fichaDaBia.nome); 

fichaDaBia.carro = "Yaris";

console.log('Ficha Da Bia ', fichaDaBia);

// quero remover uma propriedade.

delete fichaDaBia.carro;

console.log('Ficha Da Bia ', fichaDaBia);

/* objetos mutáveis e imutáveis: 
toda vez que vc manipula um objeto, ele vai alterar no código todo, não só na parte que vc alterou.
é característica do javascript.
ele sempre vai usar o mesmo espaço de memória com todas as alterações que a gente fez.
isso é diferente dos dados primitivos, que são imutáveis. sempre que altera, tem novas cópias, não altera todo o programa.
atentar quanto a isso! */ 

const nome = "Bia";
const idade = 24;
const profissao = 'programadora';
const temFilhos = false;

// se eu tenho esse código pronto e quero reutilizar ele pra dentro do meu objeto. como?
// separando por vírgulas, que daí as variáveis automaticsamente não convertidas em propriedades de chaves de valor

const fichaDaBia = {
    nome,
    idade,
    profissao,
    temFilhos,
}; 

console.log('Ficha Da Bia ', fichaDaBia);