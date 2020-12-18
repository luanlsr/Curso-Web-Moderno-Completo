const nome = 'Luan'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá 
    ${nome}!`
//suporta quebra de linha
console.log(concatenacao,template);

//expressões
console.log(`1+1 = ${1+1}`);

const up = texto => texto.toUpperCase()

//chamada da função dentro do template adicionando o valor
console.log(`Ei ...${up('cuidado')}!`);