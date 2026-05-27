/* Valores de Truthy e Valores Falsy
são diferentes de true e false
são resultado de quando convertimos uma variável para booleano

Valores falsy no JS -> 0, "" (string vazia), undefined, null, NaN (not a number)

Valores truthy -> qualquer outro caso que não sejam os acima

*/

console.log(Boolean(0)); // proprositalmente B maiúsculo. Aqui estamos
// convertendo o valor 0 para booleano. 
console.log(Boolean(""));

console.log(Boolean(-1)); 
console.log(Boolean([]));

// array e objetos vazios são truly. só string vazia que é falsy

/* o que é mais usado no dia a dia:
exemplo abaixo: temos um array nomes. Queremos extrair do array somente
os valores truly.
*/

const nomes = ["Maria", "João", "Ana", ""] 

const nomesFiltrados = nomes.filter((nome) => Boolean(nome)); // ou: ((nome) => nome); -> filtra de qlqr forma
console.log(nomesFiltrados);

// muito utilizado ao fazer condicionais. ex:

const x = 10;
const y = null;

if(x){ // to falando: se X existir - for um valor truthy -, imprima tal coisa
    console.log("X é uma variável truthy")
}

if(y){
    console.log("Y é uma variável falsy")
} // é um valor falsy por ser NULL.

nomes.forEach(nome => {
    if (nome) {
        console.log(nome)
    }
}); // se o nome existir - for truthy - imprima no console.log

// depois que aprende a fazer assim, nunca vai precisar comparar dentro de if p/ saber se é falso ou não
// ex: if !== null {  --> não precisa mais fazer assim
