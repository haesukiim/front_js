// .indexOf() : 해당 문자의 index 번호를 리턴하는 메서드
console.log("abcdef".indexOf("c"))

// .charAt() : 해당 인덱스의 값을 리턴하는 메서드
console.log("abcdef".charAt(2))

// .length : 문자열의 길이
let str1 = "abcd";
console.log(str1.length)
for(let i = 0; i < str1.length; i++){
  console.log(i)
}

// 브론즈
// 어떤 값을 받으면 값을 출력해주는 함수
const print = (value) => {
  console.log(value);
}
print("안녕하세요")
print(20);

// 3개의 정수를 빼주는 함수
function minus3(num1, num2, num3){
  return num1 - num2 - num3
}
let result = minus3(50,10,10)
console.log(result)

// 실버
// 홍길동을 n번 출력해주는 함수
function gildong(num){
  let hong = "홍길동"
  for(i=0; i < num; i++){
    console.log(hong)
  }
}
gildong("4")


// 골드
// 1~n까지 홀수만 출력해주는 함수
let n = 100
function printOdd(num){
  for(i = 1; i < n; i++){
    if(i % 2 == 0){continue}
    console.log(i)
  }
}
printOdd(100)

// // 문자열을 입력받고 원하는 문자의 개수를 구해주는 함수
// ex) getCount("abcabc", "a") -> return 2
// 문제 해결 알고리즘
// 1. 문자열을 받는다(매개변수)
// 2. 문자도 받는다(매개변수)
// 3. 함수 정의한다
// 4. 문자열의 길이 .length를 이용해서 반복문을 돌린다.
// 5. charAt()을 사용한다.
// 6. 문자랑 비교한다
// 7. 같으면 개수를 센다
// 8. 값을 리턴한다.
const getCountCharacterInContent = (content, char) => {
  let count = 0;
  for(let i = 0; i < content.length; i++){
    if(content.charAt(i) == char){
      count++
    }
  }
  return count;
}
let count = getCountCharacterInContent("abc","a");
console.log(count);




// 플레티넘
// 한글을 정수로 바꿔주는 함수 (일공이사 -> 1024)
const changeToInt = (hangle) => {
  let hangles = "공일이삼사오육칠팔구";
  let result = "";
  for(let i = 0; i < hangle.length; i++){
    result += hangles.indexOf(hangle.charAt(i));
  }
  return result;
}
let result1 = changeToInt("공삼육칠");
console.log(result1)



// 정수를 한글로 바꿔주는 함수 (1024 -> 일공이사)
const changeToHangeul = (number) => {
  let hangles = "공일이삼사오육칠팔구"
  let result = "";
  for(let i = 0; i < number.length; i++){
    result += hangles.charAt(number.charAt(i));
  }
  return result;
}
let result2 = changeToHangeul("1024");
console.log(result2)