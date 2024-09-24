window.addEventListener('load', function() {
    // console.log(somar(10,20));
    // console.log(somar(30,40));
    // 2° chamada
    // console.log(s(30,40));

    // 3° chamada
    // console.log(s2(30,30));

    // 4° chamada
    // console.log(soma(40,40));
    // 5° chamada
    console.log(soma(40,40));
    
});

// 1° Maneira de se escrever a função somar: Função declarativa
// function somar(a,b){
//     return a + b;
// }


// // 2° Maneira de se escrever a função somar: Função Literal
// var s = function somar(a,b){
//     return a + b;
// }

// 3° Maneira de se escrever a função somar: Função Anônima
// var s2 = function(a,b){
//     return a + b;
// }

// // 4° Maneira de se escrever a função somar: Arrow function
// var soma = (a,b)=> {
//     return a + b;
// }

// 5° Maneira mais simplificada de se escrever a função acima
var soma = (a,b)=> a + b;