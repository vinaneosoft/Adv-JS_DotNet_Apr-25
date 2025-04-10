let arr1=[5,6,3];
// copy this array into new array

let arr2=arr1;  // no copy, same array another ref
arr1.push(88);
console.log(arr2);

let arr3=[...arr1];  // spread operator

function addNums(...nums){ // rest operator
    // addition
   // nums acts as array
    return nums.reduce((acc,num)=>acc+num, 0)
    //nums : array

    // normal for 
    //for of
    //forEach
}

console.log(addNums(12));
console.log(addNums(12,56));
console.log(addNums(12,8,3));
console.log(addNums(6,8,3,2,5,5));
console.log(addNums());
let values=[6,3,9];
console.log(addNums(...values));


function test(n1, n2,...nums){
console.log(n1);
console.log(n2);
console.log(nums);
}

test(4,5,2,3,5,6,7,8);



function abc(...arr){

}

abc(5,"hi",true);


// spread operator for objects
const student={
    sid:333,
    sname:"Poonam",
    std:'10th'
}

// copy this object into another object
const student2=student;  // no copy  
student.sname="Krupa";
console.log(student2);


//copy
const student3={...student} //copy
console.log(student3);
student3.std="8th";
console.log(student3);
console.log(student);

// add extra key value pair while copying

const student4={
    ...student,
    division:'A'
}
console.log(student4);

// in js objects and arrays are growable

let arr=new Array(2);
let array=[56,7899]; //2
array.push(6); //3
//Array, Set, Map

// copy student object to student5, 
// but change id of student while coyping

const student5={
    ...student,
    sid:999
};
console.log(student5);

let obj1={
    id:234,
    name:"pooja"
}

let obj2={
    age:23,
    mobile:7878787878
}

// merger these 2 objects into another object
const person={...obj1,...obj2};
console.log(person);

//document.write("<b>"+person.id+"</b>");
// React : everything is immutable

let s={
    id:33,
    name:'hari'
}

s={...s};



