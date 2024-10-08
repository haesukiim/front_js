// 1. 나이는 상수로 임의로 설정, 삼항연산자를 이용한다
// 2. 값은 모두 변수에 담는다

// 실습 문제
// 나이가 19살 이상이면 "입장 가능" 출력
// 나이가 19살 이하면 "입장 불가" 출력

// 나이가 짝수면 "짝수" 출력
// 나이가 홀수면 "홀수" 출력

// &&, || 연산자를 사용한다.
// 나이가 16살이면 "당첨" 출력
// 아니면 "꽝입니다."를 출력

// 콘솔 결과 : [본인이름]님은 [입장가능]이며,
// [나이], [홀수], [꽝입니다]

const name = "해수";
const age = 22;
const age2 = age >= 19 ? "입장가능" : "입장불가";
const age3 = age % 2 == 0 ? "짝수" : "홀수";
const result = (age == 16) && "당첨" || "꽝입니다.";

console.log(name+ "님은 " + age2 + "이며, " + age +"살, "+ age3 +", " +result );


//강사님이 한 거 
//변수에 계속 넣는 연습!!!!!

// const age = 17;
// const name = "김세환";
// const baseAge = 19;
// const pass = "입장 가능";
// const notPass = "입장 불가";
// const even = "짝수";
// const odd = "홀수";
// const lucky = "당첨😎";
// const unLucky = "꽝입니다.😥";

// const isEven = age % 2 === 0; 
// const isLucky = age == 16;
// const isAdult = age >= baseAge ? pass : notPass;
// const luckyResult = isLucky ? lucky : unLucky;
// const evenResult = isEven ? even : odd;
// const result = `${name}님의 ${isAdult},\n${age}, ${evenResult}, ${luckyResult}`;
// console.log(result);


