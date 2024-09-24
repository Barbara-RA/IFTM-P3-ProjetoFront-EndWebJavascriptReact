window.addEventListener('load', function () {
    // vet.forEach(element => (element % 2 == 0) ? console.table(element *2) : console.table(element*3));
    // vet.forEach((element,index,vet )=> console.log(`[${index}] - ${element} = ${vet}`));

    // novoVet = vet.map(element => element * 2);
    // vet.filter(element => element % 2 == 0);

    // reduzindo um vetor em um único valor
    console.log(vet.reduce((element,soma)=>soma+=element));

    console.log(vet.reduce((element,soma)=>soma+=element,100));

});
// estudando arrow function
// exibeMensagem = x=> console.log(x);

// vet= [10, 20, 30, 40];


// // leitura, percorra o vetor Vet e exiba cada elemento
// vet.forEach(element => console.log(element));


vet= [11, 10, 15, 20, 25, 30, 40];


// leitura: percorra o vetor Vet e verifique se o elemento é par ou impar, se for par, exiba o dobro do elemento, se for impar, exiba o triplo do elemento
// vet.forEach(element => (element % 2 == 0) ? console.table(element *2) : console.table(element*3));

// Escrevendo o indice no console
// vet.forEach((element,index )=> console.log(`${index}: ${element}`));


// nova função que dobra o valor  ****declarativa***
// function dobrar(num){
//     return num*2;
// }

// // coloque num novo vetor
// novoVet = vet.map(dobrar)


// nova função que filtra o valor  ****declarativa***
// function filtra(num){
//     if(num % 2 == 0){
//         return num;
//     }
// }

// // // coloque num novo vetor
// novoVet = vet.filter(filtra);



// // todo elemento contido no vetor >=18 (retorna true ou false)
// console.log(`todo elemento contido no vetor`)
// console.log(vet.every(element=>element>=18));


// // tem algum elemento>=18 (retorna true ou false)
// console.log(`tem algum elemento>=18`)
// console.log(vet.some(element=>element>=18));


vetIdade= [10,15,18,20,23,15,35]

// A média das idades das pessoas com idades maiores ou iguais a determinada idade
// pegar pessoas com maiores idade filter() e cria um novo vetor e faz a média a partir desse vetor


