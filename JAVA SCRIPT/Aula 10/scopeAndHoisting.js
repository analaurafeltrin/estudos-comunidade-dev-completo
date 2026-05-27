/* Escopo -> identificar em qual parte do código a sua função ou variável está sendo declarada

Global
de Bloco
de Função
*/ 

const x = "variável global";
// é uma variável global. É acessada em qualquer escopo

// escopo de bloco -> local, só consegue ser acessada no lugar em que está
if (x){
    const z = "variável de bloco";
    console.log("X é: ", x);
    console.log("Z é: ", z); // -> aqui apareceria pois está acessivel dentro desse bloco.
    //se tentasse imprimir o z dentro do escopo da função, não iria conseguir
}

//escopo de função
const funcao = () => {
    const a = "variável do escopo da função";
    console.log("Na função, A é: ", a); // --> só vai ser acessada aqui, por estar dentro da função.
}
funcao();

/* Hoisting --> antes de executar um código, o JS pega as variáveis e funções e joga elas para o topo
das funções em que elas estão, caso elas estejam no final.
a variável "VAR" causa alguns problemas no código, e um deles é o Hoisting.
elas são melhores declaradas com const ou let.
o Hoisting também pode ser usada com funções. 

JEITO RUIM de declarar função:
    function funcao(){
    }
é melhor declarar do jeito que está ali em cima (linha 20)
*/