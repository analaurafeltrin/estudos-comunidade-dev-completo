const distanciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

/* MAP 

igual o for each, ele varre o array. mas a diferença é:
conseguimos atribuir o resultado desse método em uma variável, com
o array e dados convertidos.
converter metros em km 



distanciaEmMetros.map(distancia =>  distancia / 1000);

assim estou usando apenas o arrow function, vamos agr usar o map

*/

const distanciasEmKm = distanciaEmMetros.map(distancia =>  distancia / 1000);

// agora sim, ao imprimirmos, veremos que o retorno será já convertido nos valores.

console.log("Distância em KM: ", distanciasEmKm);

/* FILTER

FORMA MAIOR:
const itensFiltrados = distanciaEmMetros.filter(distancia => {
    if (distancia > 2000) return distancia; // vai retornar somente acima de 2000m
})

Se necessário tbm pode ser usado: index (índice) e arrayOriginal -> isso pode ser
usado nos 3 métodos dessa aula e tbm no for Each

FORMA MAIS CURTA: */

const itensFiltrados = distanciaEmMetros.filter(distancia => distancia > 2000);

// lembrando: apenas porque tem somente uma condição.

/* REDUCE
*/
 const distanciaTotal = distanciaEmMetros.reduce((acc, distancia) => {
    return acc + distancia
}, 0) // --> valor inicial que eu quero que comece

/* estamos pedindo p/ reduzir todos os itens do array em um só e, para cada valor,
quero que some o acumulador com a distância atual. */ 

