// javascript is a sychronous and single threaded programming Language.

var n = 10;

function square(num) {
  var ans = num * num;
  return ans;
}

var squareOfN = square(n);

var squareOf3 = square(3);
console.log(squareOfN);
console.log(squareOf3);

/**
 * step By step process in javascript .
 * there are two execution phase in js.
 * 1. memory execution (here all the variable are allotted  with a memory to it like)
 *  var n = undefined (all the varable are directly defined with value as undefined to it );
 *  square =  {square (num) {var ans = num * num return ans;};} (in case of function , the entire function is added as it it );
 * squareOfN = undefined ;
 * squareOf3 =  undefined;
 *
 *
 * 2. Code Execution .
 * in javascript the entire cide runs line by line from top to bottm
 * var n = 2 (it allotts {2} to memory execution to the variable n  );
 * function square ()  it will do nothing because there we dont have anything to execute ,
 * var squareOfN = square(n); here we are calling a function ,then when a function is invoked or called then
 * it creates a new execution  context .
 * it will again create the same execution phase i.e
 *  memory execution where
 * num from parameter is set as undefined ;
 * ans is also set as undefined ;
 * then comes
 *  execution phase where
 *   - num is 10 from the parameter that is sent via argument ;
 *   - ans is num * num = 100
 *   - then  it return with the value ;
 *   - in JS return means stopping execution of that funtion ,
 *   - from here code will not be executed further
 *   - when the code return then that particular execution phase will be deleted or destroyed ;
 *
 * var squareOf3 = square(3) // here same new memory will be created implemented and then deleted .
 *
 *
 * After all the program is finished then the Global Execution Context will be deleted or destroyed ;
 *
 *
 */
