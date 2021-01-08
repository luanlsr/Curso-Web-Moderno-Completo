//novo recurso do ES6

const pessoa = {
    nome: 'Luan',
    idade: 29,
    endereco:{
        logradouro: 'Rua São Gonçalo',
        numero: 57
    }
}
//tira as variáveis de dentro do objeto e usa como novas variáveis declaradas

const {nome, idade} = pessoa
console.log(nome, idade);

//cria variáveis com o nome 'n' e 'i' e atribui os valores de nome e idade
const {nome: n, idade: i} = pessoa
console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa

console.log(sobrenome, bemHumorada);


const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep);