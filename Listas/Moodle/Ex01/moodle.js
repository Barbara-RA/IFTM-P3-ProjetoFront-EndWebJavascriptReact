function surpresa(vet, x) {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > x && vet[i] % 2 === 0) {
            console.log(vet[i] * 2);
        } else {
            console.log(vet[i]);
        }
    }
}

let vet = [1, 2, 3, 4, 5];
let x = 2;
surpresa(vet, x);
