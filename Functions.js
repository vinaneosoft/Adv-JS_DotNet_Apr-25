// types of functions
// named functions

function addNums(num1, num2){
    console.log(num1+num2);
    return num1+num2;
}
addNums(56,78);
addNums(5,7);
addNums(6,8);

// annonymous functions
let addNums2=function(num1,num2){
    console.log("function with 2 arguments");
    return num1+num2;
}
const result=addNums2(45,34);
console.log(result);


addNums2=function(n1,n2,n3){
    console.log("function with 3 arguments");
    return n1+n2+n3;
}
const res=addNums2(5,3,2);
console.log(res);

function add1(n1,n2){
    console.log("function with 2 arguments");
    
}

add1(12,45);

function add1(n1,n2,n3){
    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log("function with 3 arguments");
    console.log(n1+n2+n3);
    
}

add1(34);
add1(34,67);
add1(34,67,78);
add1();


const ref=function(){
    console.log("in fun1");
}

const ref2=function(){
    console.log(" in fun2");
}
ref();
ref2();


//arrow functions
// no function key word
// no name to function


const square=(num)=>{
    // body of arrow functionss
    console.log(num*num);
}
square(4);

// features of arrow function
/*
1. if arrow function has single statement in body then {} are optional */
const square2=(num)=>console.log(num*num);
square2(3);


/*
2. if arrow function has single return statement in body then
{} and return keyword should be omitted
so that arrow function automatically returns the result */

const square3=(num)=>num*num;

const sq=square3(6);
console.log(sq);

