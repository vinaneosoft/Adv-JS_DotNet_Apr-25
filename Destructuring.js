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


let getCities=()=>{
    return cities;
}

let [ct1, ct2]=getCities();
console.log(ct1);
console.log(ct2);

// can we skip the values from array while storing into variable?
console.log("-------------");

let [ctt1,,,ctt3]=cities;
console.log(ctt1);
console.log(ctt3);

let empinfo=[123,"Hari Pawar",'DN', 5, true];
// id, name, dcode
let [id, ename, dcode]=empinfo;
console.log(id);
console.log(ename);
console.log(dcode);

// object destructuring
// declare bankaccount object : accnum, balance, type, custid
// save this value of the key in seperate variable acc.accnum


let accountdetails={
    accnum:132344345,
    balance:1000,
    type:"Saving",
    custid:123
}
 
console.log(accountdetails.accnum);

/* let acno=accountdetails.accnum;
let bal=accountdetails.balance;
let type=accountdetails.type;
let custid=accountdetails.custid;

 */
// rule variable name==object key name
let { accnum, balance, type:acctype, custid} = accountdetails;  
console.log(accnum);
console.log(acctype);

