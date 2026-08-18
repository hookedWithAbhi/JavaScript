// there are different scopes in javascript ;

function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
        // here it will find b because of lexical scope
    }
}
a();




function x() {
    y();
    function y() {
        console.log(z);
        // 1. here it will find z because of lexical scope
    }
    //  2. here it will not find z because it is not in the scope
    // 3 . so it will go to lexical scope of x and lexical scope of x is global
    // 4. finally it is called scope chain 
    // 5. finding variable in its lexical scope is called Scope Chaining
    // 6. Lexical Scope:  a function is given a lexical scope when it is created
    // 7. and every function has its parent function as its lexical scope


}
var z = 11;
x();


