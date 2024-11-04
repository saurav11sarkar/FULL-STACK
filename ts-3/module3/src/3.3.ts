{
    // type guards

    // typeof ---> type guard
    type Alphaneumeric = string | number;

    const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString()
        }
    }

    console.log(add('saurav', 'sarkar'));
    console.log(add(10, '20'));

    // in guard

    type NormalUser  = {
        name:string
    }
    type Adminuser = {
        name:string;
        role:'admin'
    }
    const getUser = (user: NormalUser | Adminuser) =>{
       if('role' in user){
        console.log(`My name is ${user.name} and My role is ${user.role} `)
       }else{
        console.log(`My name is ${user.name} `)
       }
    }

    const normalUser: NormalUser = {
        name: 'Saurav Sarkar'
    }
    const adminlUser: Adminuser = {
        name: 'Saurav Sarkar',
        role:'admin'
    }
    getUser(normalUser)
    getUser(adminlUser)

}