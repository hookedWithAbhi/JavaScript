
/**
 * what is event loop
 *  - The Event Loop is a mechanism in JavaScript that handles asynchronous operations
 *  - It is a process that continuously checks if there are any tasks to be executed
 *  - and if so, it executes them
 * 
 * 
 * steps involved in event loop
 * 
 * 1. Call Stack -> first of all the execution happens in global execution context
 * 2. Web APIs -> As soon as it finds some web api like setTimeout functions , it registers the time to the browser and the callback functions
 * 3. Micro Task Queue -> if there is any micro task queue like fetch functions , promises , process.nextTick (it has high priority then macro tasks or callback queue)
 * 4. Callback Queue => when the timer or delay ends then it pushes the callback function to callback queue
 * 5. Event Loop => here event loop works as a gatekeeper and always checks that if there are any methods in callback queue or micro task queue the it pushes it to the global execution context .
 * 
 * 
 *  */


console.log("START");

const pro = new Promise((resolve) => {
    console.log("PROMISE")
    setTimeout(() => {
        resolve("SUCCESS")
    }, 0)
});
pro.then((value) => {
    console.log(value)
})

setTimeout(() => {
    console.log("TIMEOUT")
}, 0);

console.log("END")



//START
//PROMISE
//END
// SUCCESS
// TIMEOUT

// this is the output of the above code