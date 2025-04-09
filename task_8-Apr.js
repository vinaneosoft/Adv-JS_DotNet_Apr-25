// peform following task on names array
// 1. iterate array using forEach
//2. find names starting with 'A'/ 'a'
//3. find names ending with 'N' / 'n'
//4. do function chaining for filter and forEach
//5. Check whethere names are starting with om 
// Omprakash, om, oMkar, Onkar

let s="Amant";

s.toLowerCase().startsWith("a");
// string objects are immutable

console.log(s.toLowerCase());// amant
console.log(s); // Amant

s=s.toLowerCase();
console.log(s);// amant

s.startsWith('A') || s.startsWith('a')
