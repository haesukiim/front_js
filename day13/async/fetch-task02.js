// async await
// https://jsonplaceholder.typicode.com/todos
// getTitles
// todos에서 title만 5개 가져오기 (0~4)
// 값으로 가져와서 가져온 데이를 "제목 : title" 내용으로 변경하여 출력하기

const getTitles = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if(!response.ok) return;
  const datas = await response.json();
  return datas
}

const titles = getTitles().then((datas) => datas.map((todo) => todo.title))
titles
  .then((titles) => titles.slice(0,5))
  .then((titles) => titles.map((title) => `제목 : ${title}`))
  .then((titles) => titles.forEach(title => {console.log(title)}))
  .catch((error) => console.error(error))