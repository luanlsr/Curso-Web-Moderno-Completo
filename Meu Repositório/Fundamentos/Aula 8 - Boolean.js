let isAtivo = false 
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1 //representa true
console.log(!!isAtivo); //nega a negação

console.log(!isAtivo); //negação

//OS VERDADEIROS

console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

//OS FALSOS
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log(!!('' || null || 0 || ' ')); //Vai imprimir apenas o verdadeiro


//EXEMPLO
// o console irá imprimir apenas se tiver um valor verdadeiro atribuído a variável, caso contrário irá atribuir o default 'Desconhecido'
let nome = NaN   
console.log(nome || 'Desconhecido');