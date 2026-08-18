//HOISTING
var x = 5;
console.log(x);
function x() {
  console.log("1");
}
console.log(x);
