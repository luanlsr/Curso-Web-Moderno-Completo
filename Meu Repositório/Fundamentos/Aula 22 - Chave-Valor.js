//par chave/valor
const saudacao = 'Opa!' //contexto léxico 1: local no qual a variável foi definida fisicamente no código

function exec(){
    const saudacao ='Falaaa' //contexto léxico 2
    return saudacao
}

console.log(exec());
console.log(saudacao);

//Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Luan',
    idade: 29.,
    peso: 103,
    endereco:{
        logradouro: 'Rua São Gonçalo',
        numero: 57,
        complemento: 'casa 2',
        bairro: 'Centro',
        cidade: 'Nilópolis',
        estado: 'Rio de Janeiro'
    },
    profissao: 'Desenvolvedor de Software'
}
console.log(cliente);