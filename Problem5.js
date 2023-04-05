// 5번 문제.

let user = {
  name: "윤정",
  age: 20,
};

let json = JSON.stringify(user);
alert(json);

let userData = `{"name: "윤정", "age":23}`;
let newuser = JSON.parse(json);

alert(newuser);
