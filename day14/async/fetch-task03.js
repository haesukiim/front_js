// 1번 문제
// https://jsonplaceholder.typicode.com/comments
// email 10개만 가져온 후 email에서 아이디만 가져오기
// ex) ["Eliseo@gardner.biz"] => ["Eliseo"]
// 아이디만 출력

const getIds = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  if(!response.ok) return;
  const datas = await response.json();
  return datas
}

const ids = getIds()
  .then((datas) => datas.map((comments) => comments.email))
  .then((ids) => ids.slice(0,9))
  .then((ids) => ids.map((email) => email.split('@')[0]))
  .then((ids) => ids.forEach(email => {console.log(email)}))
  .catch((error) => console.error(error))


// 2번 문제
// https://jsonplaceholder.typicode.com/users
// 이름만 가져와서 이름을 거꾸로 뒤집어서 출력하기
// ["Leanne Graham", ...] => ["maharG ennaeL", ...]
const getNames = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  if(!response.ok) return;
  const datas = await response.json();
  return datas
}

const names = getNames()
  .then((datas) => datas.map((users) => users.name.split('').reverse().join('')))
  .then((names) => names.forEach(name => {console.log(name)}))
  .catch((error) => console.error(error));