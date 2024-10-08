// 1. 데이터 요청해서 콘솔에 users 출력하기
// 2. users에 name만 콘솔에 출력하기
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((result) => result.map(({name}) => name))
// .then((result) => result.map((user) => user.name))
.then((names) => console.log(names))
.catch((error) => {console.error(error)});


