const number0fFilms = +prompt("Сколько фильмов вы уже посмотрели");

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?");
          b = prompt("На сколько оцените его?");

    if (a !== '' && b !== '' && a !== null && b !== null && a.length < 50 ){
         personalMovieDB.movies[a] = b; 
    }else{
        i--;
    }  
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);