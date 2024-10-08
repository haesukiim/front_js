// https://jsonplaceholder.typicode.com/users
// city를 가져와서
// 모두 대문자로 바꾸고,
// 알파벳 중 A의 개수를 세서 콘솔에 출력

const getCitys = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  if(!response.ok) return;
  const datas = await response.json();
  return datas
}
// "aBcDeFg".toUpperCase() :대문자로 바꿔주는 메서드

// 방법1
const citys = getCitys()
  .then((datas) => datas.map((data) => data.address.city.toUpperCase()))
  .then((datas) => datas.join("").split(""))
  .then((datas) => datas.filter((data) => data === 'A').length)
  .then(console.log)
  .catch((error) => console.error(error))

// 방법2
// const citys = getCitys()
//   .then((datas) => datas.map((data) => data.address.city.toUpperCase()))
//   .then((datas) => datas.filter((data) => data.includes('A')))
//   .then((datas) => datas.map((data) => {
//     let result = "";
//     for(let s of data){
//       if(s === "A"){ result += s}
//   }
//   return result
// }))
//   .then((datas) => datas.join("").length)
//   .then(console.log)
//   .catch((error) => console.error(error))