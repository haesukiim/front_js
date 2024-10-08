// 이름을 1번 출력해주는 함수
// function printName(){
//   console.log("박근표");
// }

// printName()

// 100이라는 값을 주는 함수
// function get100(){
//   return 100;
// }

//  console.log(get100());

//   // 두 수를 합쳐서 결과값을 주는 함수
//   function add(num1, num2){
//     return num1 + num2;
//   }

// console.log(add(10, 20));   

// ---------------------------------------------------------------------------------------------------------------
// 실습문제
// 1.성과 이름을 받아서 붙여주는 함수
function getFullName(lastName, firstName){
  let fullName = lastName + firstName;
  return lastName + firstName;
}
let name = getFullName("박", "근표")
console.log(name);

// 2.이름을 출력해주는 함수
function printName(name){
  console.log(name)
}
printName("박근표");

// 3.이름을 10번 반복해주는 함수
function printNameto10(name){
  for(let i=0; i<10; i++){
    console.log(name)
  }
}
printNameto10("박근표1");

// 4.숫자 5개를 받아서 모두 더해주는 함수
// 매개변수, 파라미터, 파람, 인자
// 디폴트 파라미터
function add(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0){
  return num1 + num2 + num3 + num4 + num5
}
let result = add(10,30,40)
console.log(result);

// 5.숫자 3개를 받아서 모두 곱해주는 함수
function return10(){
  return 10;
}

function mul(num1, num2, num3, num4 = return10()){
  return num1 * num2 * num3 * num4
}
let result2 = mul(10,10,10);
console.log(result2);

// 6.숫자 2개를 받아서 더하고 출력해주는 함수
function plus(num1 = 0, num2 = 0){
  return num1 + num2
}
let result3 = plus(10,20)
console.log(result3);

// 즉시 사용함수()()
(
  function(){
  console.log("선언과 동시에 사용")
}
)();

// 화살표 함수 () => {} (ES6)
// 자 2개를 받아서 더하고 출력해주는 함수
function addPrintNum(num1, num2){

};
const addPrintNum2 = (num1, num2) => {

};
