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

//Instead of accessing the variable from the enclosing scope,
//  passing it as an argument to a function creates a new copy in a different scope, preventing the closure issue.

// closure is not created , when passing as an argument

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

// garbage collector is a program that frees up the unutilised memory ,variables



// +++++++++++++++++++++++++++++++++=========EP -13 ++++++++++++++++++++++++++++++++++++++++

// function statement , also called function declaration

// function a(){
//     console.log("a called")
// }
// this way of creating a function is called function statement

// function expression

// b();

// var b = function (){
//     console.log("b called")
// }

// function can act as values
// this way of writing is known as function expression

// in func expression, when b is called before the function, hoisting is different
// b is still undefined, it is only given the function ,when the code execution is done


// anonymous functions

// function () {
 
// }

// created where funcs are used as values


// named function expression

// var c = function yz(){

// }

// c();
// yz();// this will give an error

// difference between parameters and arguments

// var v = function s(param1,param2){ // these are the parameters

// }

// v(1,3); // these are arguments


// first class functions

//	The ability to use functions as values is known as first class functions, passing , returning funcs
// funcs are first class citizens, same as first class funcs


// +++++++++++++++++++++++++++++++++=========EP -14 ++++++++++++++++++++++++++++++++++++++++

// what is callback function in javascript
// function when passed into another func is called callback function
// due to callback we can do async in js


// setTimeout(function(){
//     console.log("timer");
// },2000)

// function x(y){
//     console.log("x");
//     y();
// };


// x(function y(){
//     console.log("y");
// });


// call stack is also known as main thread, everything in the browser is executed through the call stack only

// we should always use async for time consuming functions, and the main thread should not be blocked

// document.getElementById("clickMe").addEventListener("click", function xyz(){
//     setTimeout(function (){
//         console.log("button clicked")
//     }, 2000)
// })

// xyz comes into the call stack when this is done


// let count = 0;


// document.getElementById("clickMe").addEventListener("click", function xyz(){
//         console.log("button clicked", ++count)
// })

// this method is not secure, bcoz anything in the code can change its value


// function x(){  
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click", function xyz(){
//             console.log("button clicked", ++count)
//     })

//     return
// }

// x();

// the function xyz has access to the count variable via the closure created by the x function.

// inside the x function, in tab, there is eventlisteners tab, inside that
// there is handler, which is the callback func, xyz() func
// which contains the closures and global scope


// garbage collection and remove event listeners
// eventlisteners are heavy ,they take up memory
// even after the call stack is empty , the closures created by eventlisteners are still there

// good practice is to remove event listener after usage


// +++++++++++++++++++++++++++++++++=========EP -15 ++++++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++=========EP -16 ++++++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++=========EP -17 ++++++++++++++++++++++++++++++++++++++++

// console.log("start")


// setTimeout(function cb(){
//     console.log("hello")
// }, 5000)


// console.log("end")

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate+10000){
//     endDate = new Date().getTime();
// }

// // Suppose there are 1 million lines of code after the end console print statement, which take 10 s to complete

// // Only after the global execution context is removed from the call stack, then only the event loop can move the 
// // callback func to the call stack from the callback queue

// console.log("while expires")


// +++++++++++++++++++++++++++++++++=========EP -18 ++++++++++++++++++++++++++++++++++++++++

// function y(){
//     console.log("y is called")
// }

// function x(y){
//     y()
// }



// how to calculate the area of circles, and the circumference ,diameter

// const radius = [1,2,3,4]

// const calculateArea = function(radius){
//     const output = []
//     for(let i = 0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output
// }

// console.log(calculateArea(radius))

// const calculateCircumference = function(radius){
//     const output = []
//     for(let i = 0;i<radius.length;i++){
//         output.push(2*Math.PI * radius[i] )
//     }
//     return output
// }

// console.log(calculateCircumference(radius))

// const calculateDiameter = function(radius){
//     const output = []
//     for(let i = 0;i<radius.length;i++){
//         output.push(2 * radius[i] )
//     }
//     return output
// }

// console.log(calculateDiameter(radius))

// this is normally how it is done by people in coding interviews
// this is a common mistake by people

// DRY principle - dont repeat yourself
// it is violated here


// const radius = [1,3,4,5]

// const area = function(radius){
//     return Math.PI * radius *  radius
// }

// const circumference = function(radius){
//     return 2 * Math.PI * radius
// }

// const calculate = function(radius, logic){
//     const output = []
//     for(let i = 0;i<radius.length;i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }

// console.log(calculate(radius, area))
// console.log(calculate(radius, Circumference))

// this above is the correct way


// const radius = [1,3,4,5]

// const area = function(radius){
//     return Math.PI * radius *  radius
// }

// console.log(radius.map(area))

// // to write the calculate func like map function, you can do like this below

// Array.prototype.calculate = function(arr, logic){
//     const output = []
//     for(let i = 0;i<arr.length;i++){
//         output.push(logic(arr[i]))
//     }
//     return output
// }

// radius.calculate(radius,area)

// now this func calculate will be available on all the arrays you see


// now to have arguments also similar to map func, calculate can be modified like this

// Array.prototype.calculate = function(logic){
//     const output = []
//     for(let i = 0;i<this.length;i++){
//         output.push(logic(this[i]))
//     }
//     return output
// }

// radius.calculate(area)

// this will point to the array from which the func call is coming from

// +++++++++++++++++++++++++++++++++=========EP -19 ++++++++++++++++++++++++++++++++++++++++

// const arr = [1,3,4,5]

// // one way
// const double = arr.map(function(a){
//     return a*2
// })

// console.log(double)

// another way of writing map function

// function doubling(x){
//     return x*2
// }

// const output = arr.map(doubling)

// console.log(doubling)


// const arr = [1,3,4,5]

// function binary(x){
//     return x.toString(2)
// }

// const output = arr.map(binary)

// const output2 = arr.map((x) => { // arrow functions
//     return x.toString(2)
// })


// // since single it can be written like this also
// // arr.map((x) => x.toString(2))



// console.log(output)

// map func is used to transform an array


// filter func

// basically used to filter contents inside an array


// const arr = [1,2,3,4]

// function isOdd(x){
//     return x%2 // odd numbers only have reminders, even doesnt
//     // so it returns odd numbers
// }



// const output = arr.filter(isOdd)// filter odd values

// const output2 = arr.filter((x) => x > 4)

// console.log(output)


// reduce

// used when all the values of array are taken and have to come up with a single value out of them

// const arr = [1,2,3,4]

// reduce takes two values
// accumulator and current


// sum 

// const output = arr.reduce(function(acc, curr){
//     acc = acc +  curr
//     return acc
// }, 0)

// console.log(output)

// //max

// const output1 = arr.reduce(function(acc,curr){
//     if(curr > acc){
//         acc = curr
//     }
//     return acc
// },0)

// console.log(output1)


// tricky map question

// const users =[
//     {firstName: "akshay",lastName: "saini",age: 26},
//     {firstName: "amal",lastName: "va",age: 24},
//     {firstName: "alan",lastName: "bebido",age: 26},
//     {firstName: "karthik",lastName: "ps",age: 28}
// ]

// // list of full name of user
// // ["akshay saini", "amal va"]

// const output  = users.map(x => x.firstName + " "+ x.lastName)

// console.log(output)


// // tricky reduce

// // if u need to iterate over an array and come up with a single value
// // we use reduce


// const users =[
//     {firstName: "akshay",lastName: "saini",age: 26},
//     {firstName: "amal",lastName: "va",age: 24},
//     {firstName: "alan",lastName: "bebido",age: 26},
//     {firstName: "karthik",lastName: "ps",age: 28}
// ]


// const output = users.reduce(function(acc,curr){
//     // console.log(acc)
//     if(acc[curr.age]){
//         acc[curr.age]= ++acc[curr.age]
//     }else{
//         acc[curr.age] = 1
//     }
//     return acc
    
// },{}) // empty object

// console.log(output)

// find out the firstName of people less than 25

// const users =[
//     {firstName: "akshay",lastName: "saini",age: 26},
//     {firstName: "amal",lastName: "va",age: 24},
//     {firstName: "alan",lastName: "bebido",age: 26},
//     {firstName: "karthik",lastName: "ps",age: 28}
// ]


// const output = users.filter(function(x){
//     if(x.age < 25){
//         return x.firstName
//     }
// })

// const output1 = users.filter((x) => x.age < 25)

// console.log(output)

// // in these the whole objects are returned instead of the firstName


// // so chaining is possible where map can be applied to the filter func

// const output2 = users.filter((x) => x.age < 25).map((x) => x.firstName)

// /// another way
// const output2 = (users.filter(function(x){
//     if(x.age < 25){
//         return x.firstName
//     }
// })).map(function(y){
//     return y.firstName
// })

// this can be done without chaining also, this is a homework

// check the link in the docs for the article related to polyfills in reduce ,filter and map

// =====================================SEASON 2 ====================

// =============================EP-01 | Callback Hell ================

// console.log("first")


// setTimeout(function(){
//     console.log("insisde the setTimeout")
// },2000)

// // in this the callback fn is passed to the setTimeout

// console.log("third")


// ==========

// const cart = ["shoes","pants","kurta"]

// api.createOrder(cart,function (){ // cart - items

//     api.proceedToPayment(
        
//         function(){
//             api.showOrderSummary(
                
//                 function(){
//                     api.updateWallet()
//                 })
//         })
    
// })

// this is the callback hell

// inversion of control occurs when we use callbacks
// we lose control over our code

// const cart = ["shoes","pants","kurta"]

// api.createOrder(cart,function (){ // cart - items

//     api.proceedToPayment(
        
//         function(){
//             api.showOrderSummary(
                
//                 function(){
//                     api.updateWallet()
//                 })
//         })
    
// })
 
// here we dont what will happen in the createorder api, bcoz 
// it maybe written by an intern, it may never call the cb func
// so by this we can giving control of our code to this api, that we dont know

// const cart = ["shoes","pants","kurta"]

// api.createOrder(cart,function (){
//     api.proceedToPayment()
// })

// async exits bcoz of callback func




// =======================EP-02 | Promises======================


