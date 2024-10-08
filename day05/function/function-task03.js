// 1) 입력받은 3개 중 홀수만 모두 더해주는 함수
const plusOdd = (num1, num2, num3) => {
  let sum = 0
  if(num1 % 2 != 0){
    sum += num1
  }
  if(num2 % 2 != 0){
    sum += num2
  }
  if(num3 % 2 != 0){
    sum += num3
  }
  
  // 방법2
  // num1 % 2 == 1 ? result += num1 : 0;
  // num2 % 2 == 1 ? result += num2 : 0;
  // num3 % 2 == 1 ? result += num3 : 0;
  
  return sum;
}
let result = plusOdd(11,20,31);
console.log(result)


// 2) 입력받은 수까지 반복 후 짝수의 합을 모두 더해주는 함수
const sumEven = (limit) => {
  let result1 = 0;
  for(let i = 0; i <= limit; i++){
    let even = i % 2 == 0;
    if(even){
      result1 += i
    }
  }
  console.log(result1)
}
sumEven(6)


// 3) 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바" -> "가나다라마바"
let input = "가a나a다a라a마a바";
function removeA(content){
  let result =""
  for(let i = 0; i < content.length; i++){
    if(content.charAt(i) == "a"){continue;}
    result += content.charAt(i);
  }
  return result;
}
let result2 = "";
result2 = removeA(input);
console.log(result2)


// 4) 입력한 값이 실수인지 정수인지 알려주는 함수
// parseInt() : 정수로 바꿔주는 함수
// console.log(parseInt(1.7))
function getFloatOrInt(num1){
  let isInt = num1 == parseInt(num1);
  let result = isInt ? "정수입니다" : "실수입니다";
  return result
}
let result3 = 0
result3 = getFloatOrInt(30.4);
console.log(result3) 


// 5) 입력받은 문자를 뒤집어주는 함수
// ex) "abcdefg" -> "gfedcba";

function reverse(content){
  let result =""
  for(let i = content.length; i>=0; i--){
    result += content.charAt(i) 
  }
  // for (let i = 0; i < content.length; i++) {
  //   result += content.charAt(content.length - 1 - i); // 올바른 인덱스로 접근
  // }

  return result;
}
let result4 = 0;
result4 = reverse("abcdefg")
console.log(result4)