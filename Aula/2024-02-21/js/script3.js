window.addEventListener('load', function() {
    verificaPar(4);

});

// 1° Maneira de se escrever a função somar: Função declarativa
function verificaPar(a){
    if(a%2==0){
        return "Par";
}else{
    return "Impar";
}

};

// 2° Maneira de se escrever a função somar: operador Ternario

verificaPar = a => (a%2==0)? console.log("Par") : console.log("Impar");
