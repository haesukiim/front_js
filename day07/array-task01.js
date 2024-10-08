// 35분
// 1) 1~10까지 Array객체에 담은 후 짝수만 출력하기
const datas = new Array(10).fill(0);
const result = (datas.map((data, i)=> i + 1).filter((data)=> data % 2 == 0))
result.forEach((data) => {
  console.log(data)
})

// 2) 한글을 숫자로
// ex) "일이삼사" -> "1234"


// 3)숫자를 한글로
// ex) "1234" -> "일이삼사"

// 4)1~100까지 합을 출력
// 100칸짜리 배열을 만든다.

// 5)문자열을 반대로 출력하기 .reverse()
// "apple"

// 6)전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1111-4455
// result) 010-****-4455
const phone = "010-1111-4455"
let arr6 = phone.replaceAll("1","*")
console.log(arr6)