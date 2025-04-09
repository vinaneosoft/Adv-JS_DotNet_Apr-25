 class Employee{
    id;name; age; department;
    constructor(id,name,age,department){
        thus.id=id;
        this.name=name;
        this.age=age;
        this.department=department;
    }
    getDetails(){
        console.log("in no p function"); 
    }

    getDetails(details){
        console.log("in 1 p function");
        
    }
}


let e1=new Employee(122, "pooja",56,"DN");
e1.getDetails();
let e2=new Employee(122, "pooja",56,"DN"); // 
e2.getDetails();
let e3=new Employee(122, "pooja",56,"DN");
e3.getDetails();

let emps=[e1,e2,e3];


