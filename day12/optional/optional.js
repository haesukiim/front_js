// 옵셔널 체이닝(Optional chaining)
const movie = {
  name : "오펜하이머",
  detail : {
    price : "50000원",
    date : "20240920"
  }
}

const movie2 = {
  name : "마블",
  detail : {
    price : "40000원"
  }
}

function printMoviePrice(movie){
  console.log(movie.detail.price)
}

function printMovieDate(movie){
  return movie?.detail?.date;
}

printMoviePrice(movie)
printMoviePrice(movie2)

console.log(printMovieDate(movie))
console.log(printMovieDate(movie2))

console.log(movie2?.detail?.date);