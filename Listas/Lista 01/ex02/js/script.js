window.addEventListener('load', function() {
    document.write(`<p>Soma das idades = ${sumAges(vetAges)}</p>`);
    document.write(`<p>A - Média de Idades = ${mediaAritimetica(sumAges(vetAges), vetAges)}</p>`);
    document.write(`<p>B - Maior Idade = ${maiorIdade(vetAges)}</p>`);
    document.write(`<p>C - Idades ímpares: ${idadesImpares(vetAges)}</p>`);
    document.write(`<p>D - Maiores de idade? ${maiorDeIdade(vetAges)}</p>`);
    // E
    document.write(`<p>Idades são maiores ou iguais ao valor informado? ${verificaIdade(vetAges)}</p>`);
    document.write(`<p>F - Idades maiores ou iguais a ${idadeUsuario}: ${idadesMaiores(vetAges, idadeUsuario)}</p>`);
    document.write(`<p>G - Média das idades maiores ou iguais a ${idadeUsuario}: ${mediaIdadesMaiores(vetAges, idadeUsuario)}</p>`);
}); // Carregamento da página

var vetAges = [10, 21, 31, 40];
var idadeUsuario;

var sumAges = vet => {
    let sum = 0;
    for (let i = 0; i < vet.length; i++) {
        sum += vet[i];
    }
    return sum;
};

// A  - A média aritmética simples das idades
var mediaAritimetica = (sum, vet) => {
    return sum / vet.length;
};

// B - A maior idade
var maiorIdade = vet => {
    let maior = vet[0];
    for (let i = 1; i < vet.length; i++) {
        if (vet[i] > maior) {
            maior = vet[i];
        }
    }
    return maior;
};

// C - As idades ímpares
var idadesImpares = vet => {
    let impares = [];
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] % 2 != 0) {
            impares.push(vet[i]);
        }
    }
    return impares;
};

// D - Verificar se todos são maiores de idade (idade >= 18); Retorno: true ou false

var maiorDeIdade = vet => {

    for (let i = 0; i < vet.length; i++) {
        if (vet[i] < 18) {
            return false;
        }
    }
    return true;
};

// E Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário

var verificaIdade = (vet) => {
    idadeUsuario = parseInt(prompt("Por favor, digite a idade que deseja comparar:"));
    if (!isNaN(idadeUsuario)) {
        document.write("E - Idade digitada:", idadeUsuario);
        for (let i = 0; i < vet.length; i++) {
            if (vet[i] < idadeUsuario) {
                return false;
            }
        }
        return true;
    } else {
        alert("Por favor, digite um número válido para a idade.");
        verificaIdade(vet);
    }
};


// F - Exibir todas as idades maiores ou iguais a determinada idade
var idadesMaiores = (vet, idadeUsuario) => {
    let maiores = [];
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] >= idadeUsuario) {
            maiores.push(vet[i]);
        }
    }
    return maiores;
}




// G -  A média das idades das pessoas com idades maiores ou iguais a determinada idade
var mediaIdadesMaiores = (vet, idadeUsuario) => {
    let maiores = idadesMaiores(vet, idadeUsuario);
    let sum = 0;
    for (let i = 0; i < maiores.length; i++) {
        sum += maiores[i];
    }
    return sum / maiores.length;
};