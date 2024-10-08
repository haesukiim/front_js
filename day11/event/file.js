const file = require("fs");

const user = new Object();
user.name = "박근표";
user.email = "pkp1234";
user.password = "1234";

const userJSON = JSON.stringify(user);

console.log(user);
console.log(userJSON);

// file.write("경로", "내용", "인코딩방식", "콜백함수")

// file.writeFile("user.json", userJSON, "utf-8", (err, content) => {
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log("출력 성공")
//   }
// })
// ------------------------------------------------------------------------------------
// file.read("경로", "인코딩", "콜백함수")
let user2;
// 비동기 통신
// file.readFile("user.JSON", "utf-8", (err, content) => {
//   user = JSON.parse(content);
// });

// 동기 통신(sync)
user2 = JSON.parse(file.readFileSync("user.json", "utf-8"));

console.log(user2);