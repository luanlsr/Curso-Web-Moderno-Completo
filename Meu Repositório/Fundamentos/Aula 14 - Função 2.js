//Armazenando uma função em uma variável
const imprimirSoma = function(a, b){ //função anônima
    return a + b
}
console.log(imprimirSoma(2,3));

//==============com o console dentro da função===========
const imprimirSoma = function(a, b){ //função anônima
    console.log(a + b)
}
imprimirSoma(2,3);

//Armazenando uma Arrow Function
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,5));

//Arrow function com retorno implícito
const subtracao = (a, b) => a - b// retornará sem que seja pedido o resultado de a - b
console.log(subtracao(9,5)); 

const imprimir = a => console.log(a);
imprimir('Legal!!!')