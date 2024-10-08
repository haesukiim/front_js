// spread (ES6 문법)
// 1depth 깊은 복사(...)
// 배열 객체

const animals = {
  cat : "야옹이",
  dog : "누렁이",
  cow : "얼룩이",
  tiger : "어흥이",
}

const animals2 = animals;
animals2.camel = "낙둥이";
// const animals2 = {...animals, camel : "낙둥이"};

// console.log(animals);
// console.log(animals2);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// let numbers = arr1 + arr2 + arr3;
// console.log(numbers.replaceAll(",","").split(""));

let numbers = [...arr1, ...arr2, ...arr3];
console.log(numbers);
console.log(...arr1)
// 객체는 순서가 없기때문에 출력 불가
// console.log(...animals)