// function change(Text) {
//   const button = document.querySelector("button");
//   button.innerHTML = Text;
// }

// const change = Text => {
//   const button = document.querySelector("button");
//   button.innerHTML = "안녕하세요" + Text + "입니다";
// };

// const change = Text => {
//   const button = document.querySelector("button");
//   button.innerHTML = `안녕하세요 ${Text} 입니다`;
// };

// const change = (Text, Text2) => {
//   const button = document.querySelector("button");
//   button.innerHTML = `안녕하세요 ${Text} 와 ${Text2} 입니다`;
// };

// const add = (number, number2) => {
//   return number + number2;
// };

// const add = (number, number2) => number + number2;

// _function = () => {
//   const plus = add(3, 5);
//   const button = document.querySelector("button");
//   button.innerHTML = `안녕하세요 ${plus} 입니다`;
// };

// const pow = x => x * x;

// _function = () => {
//   var arr = [1, 2, 3];
//   var pow = arr.map(function(x) {
//     return x * x;
//   });

//   console.log(pow);
// };

// _function = () => {
//   var arr = [1, 2, 3];
//   var pow = arr.map(x => x * x);

//   console.log(pow);
// };

function practice(name) {
  this.name = name;
}

// practice = name => {
//   this.name = name;
// };

_function = () => {
  var me = new practice("Lee");
  console.log(me);
};
