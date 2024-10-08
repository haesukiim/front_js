//성인인지 아닌지 검사하기
const age = 15;
const baseAge = 19;

if(age > baseAge){
  console.log("성인입니다")
}else if (age == baseAge){
  console.log("내년에 만나자")
}else{
  console.log("성인이 아닙니다")
}

//switch문
switch(10){
  case 1:
    console.log("1번");
    break;

  default:
    console.log("1번 아님");
    break;
}