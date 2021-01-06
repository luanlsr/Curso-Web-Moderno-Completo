//A variável VAR é visível globalmente quando criada fora de uma função
{
    {
        {
            { var sera = 'Será?'}
        }
    }
}
console.log(sera);

//mas dentro de uma função ela é visível apenas localmente
function teste(){
    var local = 123
    console.log(local);
}
teste()