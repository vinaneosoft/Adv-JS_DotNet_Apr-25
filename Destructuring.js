let cities=['mumbai','solapur','delhi','thane','noida'];
// extract 1st 3 cities and store into variables city1, city2, city3
let city1=cities[0];
let city2=cities[1];
let city3=cities[2];
/* for(let i=0;i<=2;i++){
    let city=cities[i];
    console.log(cities[i]);
    
}
 */
// array destructuring
let [c1, c2, c3]=cities;
console.log(c1);
console.log(c2);
console.log(c3);
