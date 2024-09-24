window.addEventListener('load', () => {	

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTJmNmZkYWU3ZThlOWM0NDAyNGMzZTk0OTNhNmI5MiIsInN1YiI6IjY1ZmI3ZTA4MDQ3MzNmMDE3ZGU3MjE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-EHiUqrN9UYX17omikzC7w81GQ1GBk3j1Is2kpHQ92w'
        }
      };
      var lenguege = 'pt-br';
      var page=1;
      fetch(`https://api.themoviedb.org/3/movie/popular?language=${lenguege}&page=${page}`, options)
        .then(response => response.json())
        //.then(filmes => console.log(filmes))
        .then(filmes => exibirTitulos(filmes.results))
        .catch(err => console.error(err));


});

function exibirTitulos(filmes){
    filmes.forEach(filme =>{
        var boxfilme = document.createElement('div');
        var tituloFilme= document.createElement('p');
        var capaFilme = document.createElement('img');
        var url ="https://image.tmdb.org/t/p/w500";
        capaFilme.setAttribute("src",`${url}${filme.poster_path}` );
        tituloFilme.textContent = filme.title;
        boxfilme.appendChild(tituloFilme);
        boxfilme.appendChild(capaFilme);
        document.getElementById("boxFilmes").appendChild(boxfilme);
    });   
}