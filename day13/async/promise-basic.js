// es6의 promise타입
// promise의 3가지 타입 = pending(대기) resolved(성공) rejected(실패)
const promise = new Promise((resolve, reject) => {
  let check = true;
  if(check){
    resolve("결과 성공!")
  }else{
    reject("결과 실패!")
  }
})

// 작업성공시 .then 사용, .실패시 catch사용
promise.then((result) => {console.log(result)}).catch((error) => {console.log(error)});