{
    // interface
    type User1 = {
        name:string;
        age:number;
    }

    const user1:User1 = {
        name:"saurav",
        age:23
    }

    interface User2  {
        name:string;
        age:number;
    }

    interface UserWithRole2 extends User2 {
        role:string
    }

    const user2:User2 = {
        name:"saurav",
        age:23
    }
    const user4:UserWithRole2 = {
        name:"saurav",
        age:23,
        role:'CEO'
    }

    type UserWithRole1 = User1 & {role: string}
    const user3:UserWithRole1 = {
        name: 'sarkar',
        age: 24,
        role: 'manager'
    }

    // js --> object , array -> object -> object

    type Roll = number[];
    const rollNumber:Roll = [1,2,3,4]

    interface Roll2 {
        [index:number]: number;
    }

    const rollNumber2:Roll2 = [23,45,67];


    type Add =(num1:number, num2:number)=> number

    const add:Add = (num1,num2) =>{
        return num1 + num2
    }

    interface AddNumber {
        (num1: number, num2:number): number
    }

    const addNumber:AddNumber = (num1,num2) =>{
        return num1 + num2
    }

}