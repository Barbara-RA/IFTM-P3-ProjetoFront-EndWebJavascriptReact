window.addEventListener('load', () => {

    //    document.getElementById('btn').addEventListener('click', function () {

    //     // // Primeira Aboredagem para se fazer uma requisição assíncrona
    //     // var xhttp = new XMLHttpRequest();
    //     // xhttp.onreadystatechange = function () {
    //     //     if (this.readyState == 4 && this.status == 200) {
    //     //         // Typical action to be performed when the document is ready:
    //     //         document.getElementById("text").innerHTML = xhttp.responseText;
    //     //     }
    //     // };
    //     // xhttp.open("GET", "bd.txt", true);
    //     // xhttp.send();
    //     });

    // Segunda abordagem para se fazer uma requisição assíncrona com fetch
    // response => response.text() é uma função que retorna o texto da requisição 
    // document.getElementById('btn').addEventListener('click', () => {
    // fetch('file.json')
    //     .then(response => response.json())
    //     .then(conteudo =>{
    //         document.getElementById('text').innerHTML = `${conteudo.nome} tem ${conteudo.idade} anos.`;
    //     } )
    // });
    // 2° teste com vetor
    // document.getElementById('btn').addEventListener('click', () => {
    //     fetch('usuarios.json')
    //         .then(response => response.json())
    //         .then(conteudo => {
    //             document.getElementById("text").innerHTML = conteudo.usuarios[0].nome;
    //         })
    // });

// usando o forEach para percorrer o vetor
    document.getElementById('btn').addEventListener('click', () => {
        fetch('usuarios.json')
            .then(response => response.json())
            .then(conteudo => {
                conteudo.usuarios.forEach(Element => document.getElementById("text").innerHTML += `<p>${Element.nome}</p>`);
            })
    });

});