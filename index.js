// Hoisting - EP -03
// first example
// getName();

// console.log(x);


// var x = 7;

// function getName(){
//     console.log("Hello Javascript")
// }

// 2nd example


// console.log(getName)

// function getName(){
//     console.log("hello")
// }

// in this we can get the function printed in the console, where incase of variable it was undefined

// this is all due to the creation of execution context




// +++++++++++++++++++++++++++++++++=========EP - 04 ++++++++++++++++++++++++++++++++++++++++

// var x = 1;

// a();
// b();
// console.log(x);

// function a (){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x);
// }


// output is
// 10
// 100
// 1


// +++++++++++++++++++++++++++++++++=========EP - 05 ++++++++++++++++++++++++++++++++++++++++
// shortest js program

//  var  a = 10;
//  function example(){
//     var x  =10;
// }
// console.log(window.a);
// console.log(x); // this gives not defined, bcoz it is not in the global space



// +++++++++++++++++++++++++++++++++=========EP - 07 ++++++++++++++++++++++++++++++++++++++++


function a(){
    console.log(b);
    c();
    function c(){
        console.log(b);
    }
}

var b = 10;
a();

// these variables can be accessed because when the execution context is created , lexical env is created
// the lexical env is the local memory with the lexical env of its parent
// execution context contains reference to the lexical env of its parent




// +++++++++++++++++++++++++++++++++=========EP - 07 ++++++++++++++++++++++++++++++++++++++++
