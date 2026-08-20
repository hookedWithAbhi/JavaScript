// functions are heart of JavaScript .

console.log(x);

var x = 123;

a(); //these functions are hoisted
console.log(x);

// function declaration || statement
function a() {
  var x = "1";
  console.log(x);
}

// function expression
var b = function () {  // this function is not hoisted || b is 
  var x = "100";
  console.log(x);
};
b();

// arrow function
const c = () => {
  console.log("ccc");
};

c();

// iife -> immediately invoked function expression
(function () {
  console.log("--D--");
})();

// anonymous function
(function () {
  console.log("xxx");
})();


var m = function n() {
  // named function expressions 
  console.log("M called here")
}

function params(name) {
  // here name is parameter
  console.log(name);
}

params("aaabbbcccc")
function arg(param) {
  console.log(param)
}
arg("arg");// here arg is the argument 