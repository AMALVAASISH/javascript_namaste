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


// function a(){
//     console.log(b);
//     c();
//     function c(){
//         console.log(b);
//     }
// }

// var b = 10;
// a();

// these variables can be accessed because when the execution context is created , lexical env is created
// the lexical env is the local memory with the lexical env of its parent
// execution context contains reference to the lexical env of its parent




// +++++++++++++++++++++++++++++++++=========EP - 08 ++++++++++++++++++++++++++++++++++++++++

// console.log(a);// a cannot be accessed
// console.log(b);
// var b = 1;
// let a = 10;


/////let a = 100; // duplicate redeclaration of let and const is not allowed in js


/////var a = 100; // this also is not allowed



// ====================

// const xx = 1000;
// xx = 100;

// xx = 100;
//    ^

// TypeError: Assignment to constant variable.


// +++++++++++++++++++++++++++++++++=========EP - 09 ++++++++++++++++++++++++++++++++++++++++
// block scope



{

}
// this is a block in js, also called as compound statement

 

// block scope means all variables and funcs we can access inside the block.


// console.log(a);
// console.log(b);
// console.log(c);

// {
//     var a = 1;
//     let b = 2; // both b and c are in the block scope 
//     const c = 3;
// }

// console.log(a);
// console.log(b);// both b and c cannot be accessed since they are not in the global scope
// console.log(c);

// b,c are present inside teh block scope and not the global scope

//  this tells that let and const are block scoped,

// var a = 100;

// {
//     var a = 10;
//     console.log(a);
// }

// console.log(a); // here also 10 is logged


// in this the variable a inside the block shadows the variable outside the block and the value 10 is logged


// let b = 100;

// {
//     let b = 10;
//     console.log(b);// 10 is logged
// }

// console.log(b); // 100 is logged

//==============

// const c = 100;

// {
//     const c = 10;
//     console.log(c);// 10 is logged
// }

// console.log(c); // 100 is logged


// this shadowing also works same in functions also



// const c = 100;

// function x(){
//     const c = 10;
//     console.log(c);// 10 is logged
// }
// x();
// console.log(c); // 100 is logged


// ====================

// Illegal shadowing

// u cannot shadow a let using a var 

//example, this is illegal shadowing
// let  a = 10;

// {
//     var a = 110;
// }


// Lexical scope works the same way inside block scope also.


// +++++++++++++++++++++++++++++++++=========EP -10 ++++++++++++++++++++++++++++++++++++++++

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }

// x();

// closure is function bundled with its lexical environment


// there is a good article in the google docs, check it

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z);

// z(); // 7 is logged, this is what closure does.

//]]]]]]]]]]]]]]]]]]]]]

// function x(){
//     var a = 1;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }

// var z = x();
// console.log(z);

// z();// 100 is logged because it is refering to the scope

// ===============================================


// function r(){
//     var b = 100;
//     function x(){
//         var a = 1;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }

// z(); // in this two closures will be created, x and y



// +++++++++++++++++++++++++++++++++=========EP -11 ++++++++++++++++++++++++++++++++++++++++

// function x(){
//     var i = 1;
//     setTimeout(function (){ // the control does not wait over here
//         console.log(i);
//     },1000) // this creates a closure, and attaches a timer with the callback function
//     console.log("hello");
// }

// x();


//tricky question in js

// function x(){
//     for (var i = 1;i<=5;i++){
//         setTimeout(function (){
//             console.log(i); // it goes on logging 6, due to closures
//         }, i*1000)
//     }
//     console.log("hello")
// }

// x();

//closure remembers the reference to i, not the value
// js moves on and does not wait for these timers to expire, and the loops constantly runs

// this can be avoided by using the let 

// function x(){
//     for (let i = 1;i<=5;i++){
//         setTimeout(function (){
//             console.log(i);
//         },i*1000)
//     }

//     console.log("hello");
// }

// x();

// this works correctly because a block scope is created with the let keyword and every func will have its own
// i variable value

// trickier question
// without using let , how can u achieve this 

// function x(){
//     for(var i = 1;i<5;i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i)
//             },i*1000);
//         }
//         close(i);
//     }
// }

// x();

// a new copy of i is created everytime , the setTimeout is called


// +++++++++++++++++++++++++++++++++=========EP -12 ++++++++++++++++++++++++++++++++++++++++


// function outer(b){
//     var a = 1;
//     function inner(){
//         console.log(a,b);
//     }
//     return inner;
// }


// outer("hello")(); // doubtle brackets makes the call of the inner function also

// there is overconsumptio of memory when closures are used
// bcoz those variables are not garbage collected, when the program expires,
// so this can lead to memory leaks when accumulated over time

// garbage collector is a program that frees up the unutilised variables
 


 