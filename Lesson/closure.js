// closures in javascript is a mechanism where an  internal function has access to its 
// variable of its outer lexical scope


function a() {
    let b = 12;
    console.log(b, "7")
    function c() {
        b = b + 5
        console.log(b, "10")
    }
    console.log(b, "12")
    c();
    console.log(b, "15 number lines")
};

a()