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
