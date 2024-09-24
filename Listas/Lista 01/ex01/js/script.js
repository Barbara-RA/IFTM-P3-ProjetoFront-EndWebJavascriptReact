window.addEventListener('load', function() {


});

var vetAges = [10, 21, 31, 40];
var sumAges = vet => {
    sum = 0;
    for (i = 0; i < vet.length; i++) sum += vet[i];
    return sum;
}

document.write(`<p>Soma das idades = ${sumAges(vetAges)}</p>`);