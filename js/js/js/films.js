
    // 1
    function getAllDirectors(array) {
    let result = [];
    result = array.map(movie =>{
        return movie.director;
    });
    console.table(result);
    return result;
}
// 2
function getMoviesFromDirector(array,director) {
    const films = array.filter(movie => movie.director == director);
    console.table(films);
    return films;
}
// 3
function moviesAverageOfDirector(array, director) {
    const films = array.filter(movie => movie.director == director);
    console.table("Director: " + director);
    console.table(films);

    const scores = films.reduce((contador, film) => {
        console.log("film: " + film.title + " Score: "+ film.score);
        return contador + film.score;
    }, 0);
}
// media dejando 2 decimales
const media = parseFloat(scores / parseInt(films.length)).toFixed(2);
console.log("Total Scores " + parseFloat(scores.toFixed(2)))+"numero de peliculas" + parseInt(films.length);
console.log('media sores: '+ media);
 
// 4
function orderAlphabetically(array){ 
array.sort(function (a, b) {
    if (a.title >b.title) {
        return 1;
    }
    if (a.title <b.title) {
        return 1;
    }
    return 0;
});

const primeros = movies.slice(0,20);
console.table(primeros);
return primeros;
}
// 5
function orderByYear(array) {
    let result = []; 
    result = array.map(movie => ({year: movie.year, title: movie.title}))
};
