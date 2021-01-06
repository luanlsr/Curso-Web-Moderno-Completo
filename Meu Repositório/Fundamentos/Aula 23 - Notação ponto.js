console.log(Math.ceil(6.1));//arredonda pra cima
console.log(Math.floor(6.1));

const obj1 = {}
obj1.nome = 'Bola' //Mais usual
//obj1['nome2'] = 'Bola2' //duas formas de atribuir valores aos objetos

console.log(obj1);

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()