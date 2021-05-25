import "../css/style.css";
import "./component.js";

fetch('https://www.omdbapi.com/?apikey=cb57944&s=hulk')
    .then(response => response.json())
    .then(results => {
        const allMovie = results.Search;
        let cards = '';
        allMovie.forEach(movie => cards += tampilkanMovie(movie));
        $('.movie-container').html(cards);
        $('.card').on('click',function(){
            fetch('https://www.omdbapi.com/?apikey=cb57944&i=' + $(this).data('id'))
                .then(detail => detail.json())
                .then(m => {
                    const allDetail  = tampilkanDetail(m);
                    $('.modal-body').html(allDetail);
                });
        });
});

$('.btn-search').on('click',function(){
    fetch('https://www.omdbapi.com/?apikey=cb57944&s=' + $('.keyword').val())
        .then(response => response.json())
        .then(results => {
            const allMovie = results.Search;
            let cards = '';
            allMovie.forEach(movie => {
                cards += tampilkanMovie(movie);
            });
            $('.movie-container').html(cards);
            $('.card').on('click',function(){
                fetch('https://www.omdbapi.com/?apikey=cb57944&i=' + $(this).data('id'))
                    .then(detail => detail.json())
                    .then(m => {
                        const allDetail  = tampilkanDetail(m);
                        $('.modal-body').html(allDetail);
                    });
            });
        });
});



function tampilkanMovie(movie) {
    return `<div class="col-3 my-3">
    <div class="card" data-id="${movie.imdbID}" data-toggle="modal" data-target="#detailMovie" >
        <img src="${movie.Poster}" class="card-img-top" style="height : 300px">
        <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>                                    
        </div>
    </div>
    </div>`;           
}

function tampilkanDetail(detail) {
    return `<div class="container">
    <div class="row">
        <div class="col-4">
            <img src="${detail.Poster}" alt="" class="img-fluid">
        </div>
        <div class="col-8">                        
              <ul >
                <li>Title : ${detail.Title}</li>
                <li>Year : ${detail.Year}</li>
                <li>Rating : ${detail.Rated}</li>
                <li>Release : ${detail.Released}</li>
                <li>Director : ${detail.Director}</li>
                <li>Writer : ${detail.Writer}</li>
                <li>Actors : ${detail.Actors}</li>
                <li>Plot : ${detail.Plot}</li>
                <li>Language : ${detail.Language}</li>
                <li>Country : ${detail.Country}</li>
              </ul>
        </div>
    </div>
</div>`;
}


