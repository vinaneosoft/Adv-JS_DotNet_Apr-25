//file name : math.js
// module name : math
export function addNums(...nums){
    return nums.reduce((sum, num)=>sum+num, 0);
}
export function multNums(...nums){
    return 0;
}
const pie=3.142;
export default pie;

/*A module cannot have multiple default exports.*/