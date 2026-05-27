const listaDeConvidados = ["Matheus", "Isa", "Amanda", "Paula"];

// Push -> adiciona elemento no final do array

listaDeConvidados.push("Leonardo");

// Pop -> remover último elemento do array

listaDeConvidados.pop();

// Unshift -> adiciona elemento no início do array

listaDeConvidados.unshift("Beatriz");

// Shift -> remove o primeiro item da lista

listaDeConvidados.shift();

console.log(listaDeConvidados); 

console.log("Amanda está na lista? ", listaDeConvidados.includes("Amanda"));
