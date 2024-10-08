// 값을 2개 전달 받아서 큰 값, 작은 값을 알려주는 함수
function getMinMax(num1, num2){
  if(num1 < num2){
    console.log(`큰값 : ${num2}, 작은값 : ${num1}`)
  }
  else if(num1 > num2){
    console.log(`큰값 : ${num1}, 작은값 : ${num2}`)
  }
  else{
    console.log("두 수는 같습니다.");
  }
}
getMinMax(30,30)


// 정수를 넘기면 홀수인지, 짝수인지 알려주는 함수
function evenOdd(num){
  let result = num % 2 == 0 ? "짝수" : "홀수";
  return result
}
let result = evenOdd(11);
console.log(result);

// 0, 1을 마구잡이로 5개 전달했을 때
// 0과 1의 개수를 알려주는 함수
// ex) myFunc(0, 1, 0, 0, 1)
// ex) 0의 개수 3개, 1의개수 2개
const getCount = (num1, num2, num3, num4, num5) => {
  let countZero = 5;
  let countOne = 0;

  num1 && countOne++
  num2 && countOne++
  num3 && countOne++
  num4 && countOne++
  num5 && countOne++

  // 방법2
  // if(num1){countOne++}
  // if(num2){countOne++}
  // if(num3){countOne++}
  // if(num4){countOne++}
  // if(num5){countOne++}

  countZero -= countOne;
  return `0의 개수 ${countZero}, 1의 개수 ${countOne}`;
};
console.log(getCount(1,1,0,0,0));