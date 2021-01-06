//Atribuição por referência
//Apontam pro mesmo endereço de momória

const a = {name:'teste'}
const b = a
b.name = 'Opa'
console.log(a); //Os objetos foram alterados nas duas constantes 'a' e 'b'
console.log(b);

//Cópia por valor (tipos primitipos)
let c = 3
let d = c
d++

console.log(d);
console.log(c);

//================
let valor // não inicializada

console.log(valor); //undefined
// console.log(valor2); // is not defined

valor = null //ausência de valor
console.log(valor); //null 
// NULL é usado para zerar uma variável

// console.log(valor.toString); //Error!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.99
console.log(produto);

//=================
produto.preco = undefined //evite atribuir undefined
//melhor atribuir 0

produto.preco = 0