const url = "https://movie.pequla.com/api/movie"

fetch(url)
    .then(rsp => rsp.json()
    .then(data => {
        const movies = data.movies
        const movieList = document.getElementById('movie-title')
    }))