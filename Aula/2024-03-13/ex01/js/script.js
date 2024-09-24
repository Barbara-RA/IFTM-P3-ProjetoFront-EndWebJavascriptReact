window.addEventListener('load',() =>{

   document.getElementById('btn').addEventListener('click', function () {

    // Primeira Aboedagem para se fazer uma requisição assíncrona
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("text").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "bd.txt", true);
    xhttp.send();
    });
});