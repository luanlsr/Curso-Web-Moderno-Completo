//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2)// neste caso irá imprimir NaN

//função com retorno
function soma (a, b = 0){ //atribui o valor 0 ao parametro b
    return a + b
}
console.log(soma(2));