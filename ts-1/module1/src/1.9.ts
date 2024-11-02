{
    //Type Alias
    type Student ={
        name: string;
        age: number;
        gender:string;
        contactNo?:string;
        address: string;
     }

     const student1: Student={
        name:'Saurav',
        age:24,
        gender:'Mele',
        contactNo: '017000000',
        address:'ctg'
     }

     const student2:Student ={
        name:'Mir',
        age: 40,
        gender: "Mele",
        address: 'dhk'
     }

     const student3:Student ={
        name:'Lir',
        age: 40,
        gender: "Mele",
        address: 'dhk'
     }

     type UserName = string;
     type IsAdmin = boolean;
     const userName : UserName = "Persian";
     const isAdmin: IsAdmin = true;

     type Add = (num1: number , num2: number)=> number;
     const add: Add = (num1, num2)=> num1 + num2;
}