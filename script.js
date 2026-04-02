const url = "https://movie.pequla.com/api/movie"

fetch(url)
    .then(response => response.json())
    .then(data => {
        const movies = document.getElementById('movies')
        for(let movie of data){
            const list = document.createElement('li')
            list.innerText = movie.title 
            movies.appendChild(list)       
        }
        
        
    })