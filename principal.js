const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const APIKEY = 'd70ec4c13a00123d5583dc30f9fdb55d';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';
let xhr;

function carregaFilmes () {
    xhr = new XMLHttpRequest ();

    xhr.open ('GET', TMDB_ENDPOINT + '/movie/popular' + '?api_key=' + APIKEY, true);
    xhr.onload = exibeFilmes;
    xhr.send();
}



function exibeFilmes () {
    
    let data = JSON.parse (xhr.responseText);
    let textoHTML = '';
    let id = ['card_movie1','card_movie2','card_movie3','card_movie4'];

    for (let i = 0; i < 4; i++) {
        let nomeFilme = data.results[i].title;
        let dataLancamento = data.results[i].release_date;
        let idiomaOriginal = data.results[i].original_language;
        let imagem = IMG_PREFIX + data.results[i].poster_path;
        let idMovie = data.results[i].id;
                

        textoHTML = `<img class="cartaz" src="${imagem}" alt="Cartaz filme">
        <h2 class="card-title">${nomeFilme}</h2><p class="card-text">Data de lançamento: ${dataLancamento}</p>
        <p class="class-text"> Idioma Original: ${idiomaOriginal}</p>
        <a href="https://www.themoviedb.org/movie/${idMovie}" class="btn btn-primary">Ler Mais</a> `
               
        
        document.getElementById(id[i]).innerHTML = textoHTML;
    }
    carregaSlides();

}

function carregaSlides () {
    xhr = new XMLHttpRequest ();

    xhr.open ('GET', TMDB_ENDPOINT + '/movie/upcoming' + '?api_key=' + APIKEY, true);
    xhr.onload = carregaCarrosel;
    xhr.send();
}

function carregaCarrosel(){
    let data = JSON.parse (xhr.responseText);
    let textoHTML = '';
    let id = ['slide1','slide2','slide3'];

    for (let i = 0; i < 3; i++) {
        let nomeFilme = data.results[i].title;
        let dataLancamento = data.results[i].release_date;
        let idiomaOriginal = data.results[i].original_language;
        let imagem = IMG_PREFIX + data.results[i].poster_path;
        let sinopse = data.results[i].overview;        
        let idMovie = data.results[i].id;

        textoHTML = `<div class="col-md-6 col-xsm-12">
                            <img class="cartazSlide" src="${imagem}" alt="Cartaz filme">
                    </div>
                    <div class="col-md-6 col-xsm-12"> 
                       <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="titulo_filme">${nomeFilme}</h2>
                                </div>
                                <div class="col-12">
                                   <p class="sinopse"> <strong>Sinopse: </strong>${sinopse}</p>
                                   <p class="sinopse"> <strong>Lançamento: </strong>${dataLancamento}</p>
                                   <p class="sinopse"> <strong>Idioma Original: </strong>${idiomaOriginal}</p>                                   
                                    <a href="https://www.themoviedb.org/movie/${idMovie}" class="btn btn-primary">Ler Mais</a> 
                                </div>
                            </div>
                        </div>
                    </div>`

        document.getElementById(id[i]).innerHTML = textoHTML;
    }
}

onload=()=>{

    carregaFilmes();  
   let destaques  = document.querySelector('#btnDestaque');
   let avaliacao  = document.querySelector('#btnAvaliacao');  

   

   destaques.onclick=()=>{
       window.open('https://www.themoviedb.org/movie');
   }

   avaliacao.onclick=()=>{
        window.open('https://www.themoviedb.org/discuss/movies');
    } 
  
   
   
}
    
