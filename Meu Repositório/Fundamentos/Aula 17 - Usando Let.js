let numero = 1
{
    let numero = 2
    console.log('dentro = ',numero) //O let tem escopo de bloco, escopo de função e escopo global
}
console.log('fora =', numero);

//dentro =  2
//fora = 1