let number0fFilms;


function start() {
    number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
        number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
              b = prompt('На сколько оцените его?', '');
     
        if (a !== '' && b !== '' && a !== null && b !== null && a.length < 50) {
            personalMovieDB.movies[a] = b; 
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonlLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30) {
        alert("Вы Классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonlLevel();

function showMeDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMeDB();

function writeYourGenres() {
     for (let i = 1; i < 4; i++) {
         const text = prompt(`Ваш любимый жанр под номером ${i}`);
         personalMovieDB.genres.push(text);
    }
}

writeYourGenres();

