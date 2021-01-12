function tratarErrorELancar(erro){
    //throw new Error('...Ops')
    // throw 10
    // throw true
    throw{
        nome: 'Erro',
        msg: erro.message
    }

}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e){
        tratarErrorELancar(e)
    }finally {
        console.log('final');
    }
}
const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)