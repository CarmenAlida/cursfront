function getAllDirectors(array) {
    let result = [];
    result = array.map(movie =>{
        return movie.director;
    });
    console.table(result);
    return result;
}

function getMoviesFromDirector(array,director) {
    const films = array.filter(movie => movie.director == director);
    console.table(films);
    return films;
}

function moviesAverageOfDirector(director) {
    const filmsBydirector = movies.filter(movie => movie.director == director);
    console.table("Director: " + director);
    console.table(filmsBydirector);

    const scores = filmsBydirector.reduce((contador, film) => {
        console.log("film: " + filmsBydirector.title + " Score: "+ filmsBydirector.score);
        return contador + filmsBydirector.score;
    }, 0);
}