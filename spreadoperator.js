let arr1=[5,6,3];
// copy this array into new array

let arr2=arr1;  // no copy, same array another ref
arr1.push(88);
console.log(arr2);

let arr3=[...arr1];  // spread operator

function addNums(...nums){ // rest operator
    // addition
   
    return nums.reduce((acc,num)=>acc+num, 0)
}

console.log(addNums(12));
console.log(addNums(12,56));
console.log(addNums(12,8,3));
console.log(addNums(6,8,3,2,5,5));
console.log(addNums());
let values=[6,3,9];
console.log(addNums(...values));


function test(n1, n2, nums){
console.log(n1);
console.log(n2);
console.log(nums);



}

test(4,5,2,3,5,6,7,8);