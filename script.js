const url = "https://movie.pequla.com/api/movie"

fetch(url)
    .then(response => response.json())
    .then(data => {
        const movies = data.movies;
        const moviesContainer = document.getElementById("container")
        console.log(movies)
    })