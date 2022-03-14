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