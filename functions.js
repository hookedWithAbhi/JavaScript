// functions are heart of JavaScript .

console.log(x);

var x = 123;

a();
console.log(x);

// function declaration
function a() {
  var x = "1";
  console.log(x);
}

// function expression
var b = function () {
  var x = "100";
  console.log(x);
  b();
};

// arrow function
const c = () => {
  console.log("ccc");
};

c();

// iife -> immediately invoked function expression
(() => {
  console.log("--D--");
})();
