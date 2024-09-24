window.addEventListener('load', function() {

    var vet = [1, 2, 3, 4, 5];

    imprimirPar(vet);
    imprimirImpar(vet);
});

var imprimirPar = vet => {
    vet.forEach(elemento => (elemento % 2 == 0)? document.write(elemento): null);
        
};

var imprimirImpar = vet => {
    vet.forEach(elemento => {
        if (elemento % 2 != 0) {
            document.write(elemento);
        }
    });
}
