const animals = {
  cat : "야옹이",
  dog : "누렁이",
  cow : "얼룩이",
  tiger : "어흥이"
}

// console.log(animals.cat)
// console.log(animals.dog)
// console.log(animals.cow)
// console.log(animals.tiger)

// 많이 써보기!
const {cat, dog, cow, tiger} = animals;
console.log(cat)
console.log(dog)
console.log(cow)
console.log(tiger)

// 배열도 사용 가능
// let [one, two, three, four] = [10, 20, 30, 40];
// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)

let arr = [30, 40, 50 ,60];
const [one, two, three, four] = arr;
console.log(one)
console.log(two)
console.log(three)
console.log(four)
