// 배열을 생성하는 방법
const array1 = [10, 20, 30, 40, 50, 60];
// console.log(array1[4])

const array2 = new Array();
const array3 = new Array(10).fill(false); //길이를 알고 있을 때
const array4 = Array.of("1", "2", "3")

console.log(array2)
console.log(array3)
console.log(array4)

// 길이를 확인
console.log(array3.length)

// .split(), string의 메서드
// 전달된 매개변수를 기준으로 잘라서 '배열'로 리턴한다.
// 아무것도 전달하지 않으면 모두 자른다.
const phone = "010-9999-5555";
let array5 = phone.split("-");
console.log (array5)

// .join(), array의 메서드
// 배열을 합쳐주고 '문자열'로 리턴한다
let phoneNumber = array5.join("");
console.log(phoneNumber);

console.log(array5[1])

// .replace(바꾸고 싶은 값, 바뀌는 값) , string의 메서드
// 제일 먼저 만나는 값을 변경한다.
// .replaceAll(바꾸고 싶은 값, 바뀌는 값) , string의 메서드
const result = phone.replace("9", "*")
const result2 = phone.replaceAll("9", "*")
console.log(result)
console.log(result2)

// CRUD(create read update delete)

// .push(), array의 메서드
// 기존의 배열에 값을 우겨넣을때 사용
// 기존의 배열에 값을 마지막에 추가한다.
const arr1 = ["박근표","홍길동","장보고"];
arr1.push("김철수");
arr1.push("흰둥이", "짱구");
console.log(arr1)

// .concat(), array의 메서드
// 2개의 배열을 합쳐서 '새로운 배열'로 리턴한다.
const arr2 = ["맹구", "유리"];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// .unshift(), array의 메서드
// 맨 앞에 값을 추가하는 메서드
arr3.unshift("김영희")
console.log(arr3)

// 제거
// .pop(), array의 메서드
// 맨 마지막의 요소를 추출, 마지막 값을 리턴
console.log(arr3.pop())
console.log(arr3)

// .shift(), array의 메서드
// 맨 앞의 요소를 추출, 맨 앞의 값을 리턴
console.log(arr3.shift())
console.log(arr3)

// .slice(startIndex, endIndex), array의 메서드
// 단 매개변수를 1개 전달하면 startIndex부터 끝까지 가져온다.
// 얕은 복사, 새로운 배열로 리턴한다. 
// endIndex전까지 가져온다
// console.log(arr3.slice(2,5));
// console.log(arr3.slice(4));
console.log(arr3.slice(-2));
console.log(arr3.slice(-4,-1));

// console.log(arr3)

// .splice(),array(startIndex, deleteCount, addItems), array
// 수정,삭제 가능하기 때문에 많이 사용
const arr4 = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr4.splice(2, 3));
console.log(arr4.splice(3, 0, 10))
console.log(arr4.splice(4, 1, 50))
console.log(arr4)

// 정렬
// .sort() 유니코드 방식으로 정렬함
// 무작위로 들어간 데이터 값을 정렬하는 함수
const arr5 = [150, 100, 20, 30, 500, 10, 200, 30, 70, 80];
// 오름차순
console.log(arr5.sort((a, b) => a - b))
// 내림차순
// .reverse()
console.log(arr5.sort((a, b) => a - b).reverse())


// ------------------------------------------------------------------
// 배열의 고차함수
// .forEach((data, i, array)=>{})   //매개변수의 이름은 바꿔도되나 순서는 지켜야함
const arr6 = [10, 20, 30, 40, 50, 60, 70];
arr6.forEach((data, i, array) => {
  console.log(array);
})

// forEach를 사용하여 기존 값을 제곱으로 변경하기
// i를 활용하여 iterable한 값에 접근할 수 있다.
const arr7 = [1, 2, 3, 4, 5, 6, 7];
arr7.forEach((data, i, array) => {
  array[i] *= array[i]
})
console.log(arr7)

// map(()=>{})
// 반복을 통해 값에 접근하고, 새로운 배열로 return한다.
// 반드시 return 값이 있어야한다.
// let result1 = arr6.map((data, i, datas) => {
//   return data + 10
// })
// console.log(result1);

let result1 = arr6.map((data, i, datas) => data + 10)
console.log(result1)

// .filter()
//  조건이 true인 값만 모아서 새로운 배열로 리턴한다.
// 반드시 리턴 값이 필요하다.

let result3 = arr6.filter((data, i, datas) => data % 4 == 0)
console.log(result3)