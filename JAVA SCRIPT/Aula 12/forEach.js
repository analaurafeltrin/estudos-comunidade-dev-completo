// Método For Each

// array com valores de objeto dentro dele:

const notasFinais = [
    {nome: "Beatriz", nota: 5},
    {nome: "Matheus", nota: 7},
    {nome: "Amanda", nota: 10},
    {nome: "Paula", nota: 5},
]

// imprimir na tela o nome e a nota do aluno.
// fazendo com o loop for:

for (let i = 0; i < notasFinais.length; i++) {
//variável de controle + loop i menor que array.length e ao final de cada loop some 1 no valor.
    if (notasFinais[i].nota >= 6) {
        // buscar no array, na posição 0 (inicial da variável), qual propriedade quero, com a nota de aprovação sendo >= 6
        console.log(`O aluno ${notasFinais[i].nome} está aprovado com ${notasFinais[i].nota}`)
    } 
    else {
        console.log(`O aluno ${notasFinais[i].nome} está reprovado com ${notasFinais[i].nota}`)
    }
}

// outra estrutura de controle: for Of - outro loop 

for (let aluno of notasFinais){
    if (aluno.nota >= 6) {
        // buscar no array, na posição 0 (inicial da variável), qual propriedade quero, com a nota de aprovação sendo >= 6
        console.log(`O aluno ${aluno.nome} está aprovado com ${aluno.nota}`)
    } 
    else {
        console.log(`O aluno ${aluno.nome} está reprovado com ${aluno.nota}`)
    }   
}

// método for each: utilizado pra varrer o array e fazer uma coisa com cada um dos itens

notasFinais.forEach(() => {
//quase sempre utilizamos a arrow function 
if (aluno.nota >= 6) {
        // buscar no array, na posição 0 (inicial da variável), qual propriedade quero,
        //  com a nota de aprovação sendo >= 6
        console.log(`O aluno ${aluno.nome} está aprovado com ${aluno.nota}`)
     }  else {
        console.log(`O aluno ${aluno.nome} está reprovado com ${aluno.nota}`)
     }
    } );

// atualmente é fundamental usar o For Each, é o mais utilizado hoje
