window.addEventListener('load', function() {
    var vet=[1,2,3,4,5];
    imprimir(vet);
    // vet.forEach(elemento => document.write(elemento));
}); 

// imprimir = vet => {
//     for (let i = 0; i < vet.length; i++) {
//         document.write(vet[i]);
//     }
// };


var imprimir = vet => vet.forEach(elemento => document.write(elemento));



