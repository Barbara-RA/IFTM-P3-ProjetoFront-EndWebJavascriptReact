window.addEventListener('load', () => {
    clearInterval(intervalo);
});

// Função para carregar os produtos dependendo da categoria selecionada
function carregarProdutos() {
    const select = document.getElementById('categoria');
    const categoriaSelecionada = select.options[select.selectedIndex].value;

    if (categoriaSelecionada === 'selecione') {
        // Não faz nada
        return;
    } else if (categoriaSelecionada === 'todos') {
        carregarTodosProdutos();
    } else if (categoriaSelecionada === 'geladeiras') {
        exibirDiv('promocoesGeladeiras');
        carregarDados('produtoGeladeira.json', 'promocoesGeladeiras', 'img/geladeiras/geladeira');
        esconderDiv('promocoesCelulares');
    } else if (categoriaSelecionada === 'smartphones') {
        exibirDiv('promocoesCelulares');
        carregarDados('produtoSmartphones.json', 'promocoesCelulares', 'img/celulares/celular');
        esconderDiv('promocoesGeladeiras');
    }
}

// Função para carregar todos os produtos
function carregarTodosProdutos() {
    exibirDiv('promocoesGeladeiras');
    carregarDados('produtoGeladeira.json', 'promocoesGeladeiras', 'img/geladeiras/geladeira');
    exibirDiv('promocoesCelulares');
    carregarDados('produtoSmartphones.json', 'promocoesCelulares', 'img/celulares/celular');
}

// Função para exibir uma div
function exibirDiv(id) {
    document.getElementById(id).style.display = 'block';
}

// Função para esconder uma div
function esconderDiv(id) {
    document.getElementById(id).style.display = 'none';
}

// Função para carregar os dados do JSON e iniciar o slideshow
function carregarDados(jsonFile, divId, imagePath) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // Iniciar o slideshow com os dados carregados
            iniciarSlideshow(data, divId, imagePath);
        })
        .catch(error => console.error(`Erro ao carregar dados de ${jsonFile}:`, error));
}

// Função para iniciar o slideshow
function iniciarSlideshow(produtos, divId, imagePath) {
    let indice = 0; // Índice do produto atual no array
    let intervalo = setInterval(() => {
        const produto = produtos[indice];
        exibirProduto(produto, divId, imagePath, indice);
        indice = (indice + 1) % produtos.length; // Avança para o próximo produto circularmente
    }, 1000); // Intervalo de 1 segundo entre os produtos

    // Função para exibir os detalhes do produto
    function exibirProduto(produto, divId, imagePath, indice) {
        const promocoesDiv = document.getElementById(divId);
        promocoesDiv.innerHTML = `
            <h2>${produto.Marca}</h2>
            <p>${produto.Modelo}</p>
            <p>${produto.Valor}</p>
            <img src="${imagePath}${(indice + 1).toString().padStart(2, '0')}.jpg" alt="Imagem do produto" width="200" height="200">
        `;
    }

    // Função para parar o slideshow quando a página for fechada
    window.addEventListener('unload', () => {
        clearInterval(intervalo);
    });
}
