const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


//veche
// numbers.forEach(function (el) {
//     if (el % 2 === 0){
//     console.log(el);
//     }
// })


//varianta noua
// for(let el of numbers) {
//     console.log(el);
// }

const movies = [
    {
        title: 'Amari',
        score: 99
    },
    {
        title: 'Stand With U',
        score: 85
    },
    {
        title: 'Warzone',
        score: 95
    },
    {
        title: 'Blinders',
        score: 90,
    }
]

// 'Amari - 90/100


movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`)

})

