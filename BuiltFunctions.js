// how arrow functions can be used as callback
// forEach, map, reduce, find, filter
// all above funcitons will work on collection : array

let ages=[12,10,2,3,1,4,1,7,6,5];
// iterate above array 
// normal for loop
for(let i=0; i<ages.length;i++){ // i : index
    console.log(ages[i]);
}
// for of loop
for(let age of ages){   // age : value
    console.log(age);
    
}
// forEach method
console.log("-----forEach method-------");
ages.forEach(age=>console.log(age));

// value, index
ages.forEach((age,ageindex)=>console.log(age+" "+ageindex));
// value, index, how many ages remained to iterate

ages.forEach((age,ageindex, arrref)=>
    console.log(age+" "+ageindex+" "+((arrref.length-1)-ageindex)+" ages are pending to iterate"));

// JS EL
let age=89;
console.log("My age is "+age);
console.log(`My age is ${age}`); 
console.log("My age is",age);

ages.forEach((age,ageindex, arrref)=>
    console.log(`${age} ${ageindex} ${((arrref.length-1)-ageindex)} ages are pending to iterate`));


let obj={
    id:123,
    name:"Veena"
}
console.log("object is "+obj); // no
console.log(`object is ${obj}`); // no
console.log(obj);
console.log("object is ",obj);
console.log("object is "+obj.id+" "+obj.name);
console.log(`object is ${obj.id} ${obj.name}`);

 ages=[12,10,2,3,1,4,1,7,6,5];

// filter method
// store ages <=5 in another array

const filteredages=ages.filter((age)=>age<=5);
console.log(ages);
console.log(filteredages);
filteredages.forEach(age=>console.log(age))

let names=["om","sonali",'pravin','vina','sagar','ki'];
// filter names having length 2
const filterednames=names.filter(name=>name.includes('i'))
console.log(names);
console.log(filterednames);

names
    .filter(name=>name.includes("i"))
    .forEach(name=>console.log(name))

// filter :  return array : all filtered values
// find : return first value matching with predicate

// Q. find first matching ages which is <=5
const filteredage=ages.find((age)=>age<=5);
console.log(filteredage);

const filteredname=names.find(name=>name.includes('i'))
console.log(filteredname);


const employee={
    id:123,
    name:"Sonali",
    age:45,
    department:'DN'
}
const employees=[
    {
        id:123,
        name:"Sonali",
        age:45,
        department:'DN'
    },
    {
        id:124,
        name:"Manali",
        age:45,
        department:'JS'
    },
    {
        id:121,
        name:"Manoj",
        age:30,
        department:'JS'
    }
]
// Q. iterate above array using forEach
employees.forEach(employee=>console.log(employee))
employees.forEach(employee=>console.log(employee.name))

//Q. find employee with id 124
// find
const emp=employees.find(emp=>emp.id==124);
console.log(emp);

// Q. find employees working in JS department : filter
const JSemployees=employees.filter(emp=>emp.department=='JS');
console.log(JSemployees);


let s1="Hello";  //string literals
let s2="Hello"; // string
  
let s3=new String("Hi"); // String object
let s4=new String("Hi");  // String

let n1=67;
let n2=67;
console.log(n1==n2); // value comparision
console.log(s3==s4); // memory loc comparision
console.log(s1==s2); 

// 2 object  == memory loc

ages=[12,10,2,3,1,4,1,7,6,5];
// Make double of every value of array 
//faster development
const newages=ages.map((age)=>age*2);
console.log(ages);
console.log(newages);

const newages2=ages.map((age)=>age);
console.log(ages);
console.log(newages2);

// slower development
const arr=[]
ages.forEach(age=>{
    console.log(age);
    arr.push(age*2);
});

names=["om","sonali",'pravin','vina','sagar','ki']

//Q. replace i with ee for names having i 
//Q. filter names having i, then replace i with ee
names
    .filter(name=>name.includes("i"))
    .map(name=>name.replaceAll("i","ee"))
    .forEach(name=>console.log(name));


const prefixednames=employees.map((emp)=>"NEO-"+emp.name.toLowerCase())
console.log(prefixednames);

// reduce
ages=[12,10,2,3,1,4,1,7,6,5];
// sum of array elements

let sum1=ages[0];
for(let i=1;i<ages.length;i++){
    sum1=sum1+ages[i]
}
console.log(sum1);

let sum2=0;
for(let age of ages){
    sum2=sum2+age  
}
console.log(sum2);

const summ=ages.reduce((sum, age)=>sum+age);
/* sum=12,age=10 return 12+10 
    sum=22, age=2 return 22+2 
    sum=24, age=3 return 24+3
    ...
    ...
    sum=51
 */
console.log(summ);
