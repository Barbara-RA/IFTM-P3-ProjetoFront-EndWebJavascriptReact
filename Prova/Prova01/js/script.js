let intervaloGeladeiras;
let intervaloCelulares;

window.addEventListener('load', () => {
    clearInterval(intervaloGeladeiras);
    clearInterval(intervaloCelulares);
});

function exibirDiv(id) {
    document.getElementById(id).style.display = 'block';
}

function esconderDiv(id) {
    document.getElementById(id).style.display = 'none';
}

function carregarProdutos() {
    const select = document.getElementById('categoria');
    const categoriaSelecionada = select.options[select.selectedIndex].value;

    clearInterval(intervaloGeladeiras);
    clearInterval(intervaloCelulares);

    if (categoriaSelecionada === 'selecione') {
        return;
    } else if (categoriaSelecionada === 'todos') {
        carregarTodosProdutos();
    } else {
        carregarProdutosPorCategoria(categoriaSelecionada);
    }
}

function carregarTodosProdutos() {
    exibirDiv('promocoesGeladeiras');
    carregarDados('produtoGeladeira.json', 'promocoesGeladeiras', 'img/geladeiras/geladeira', intervaloGeladeiras);
    exibirDiv('promocoesCelulares');
    carregarDados('produtoSmartphones.json', 'promocoesCelulares', 'img/celulares/celular', intervaloCelulares);
}

function carregarProdutosPorCategoria(categoria) {
    if (categoria === 'geladeiras') {
        exibirDiv('promocoesGeladeiras');
        carregarDados('produtoGeladeira.json', 'promocoesGeladeiras', 'img/geladeiras/geladeira', intervaloGeladeiras);
        esconderDiv('promocoesCelulares');
    } else if (categoria === 'smartphones') {
        exibirDiv('promocoesCelulares');
        carregarDados('produtoSmartphones.json', 'promocoesCelulares', 'img/celulares/celular', intervaloCelulares);
        esconderDiv('promocoesGeladeiras');
    }
}

function carregarDados(jsonFile, divId, imagePath, intervalo) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            iniciarSlideshow(data, divId, imagePath, intervalo);
        })
        .catch(error => console.error(`Erro ao carregar dados de ${jsonFile}:`, error));
}

function iniciarSlideshow(produtos, divId, imagePath, intervalo) {
    let indice = 0;

    clearInterval(intervalo);

    intervalo = setInterval(() => {
        const produto = produtos[indice];
        exibirProduto(produto, divId, imagePath, indice);
        indice = (indice + 1) % produtos.length;
    }, 1000);

    function exibirProduto(produto, divId, imagePath, indice) {
        const promocoesDiv = document.getElementById(divId);
        promocoesDiv.innerHTML = `
            <h2>${produto.Marca}</h2>
            <p>${produto.Modelo}</p>
            <p>${produto.Valor}</p>
            <img src="${imagePath}${(indice + 1).toString().padStart(2, '0')}.jpg" alt="Imagem do produto" width="200" height="200">
        `;
    }

    window.addEventListener('unload', () => {
        clearInterval(intervalo);
    });
}
