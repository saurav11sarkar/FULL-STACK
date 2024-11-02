{
    // object destructuring 
    const user = {
        id: 345,
        name: {
            firstname: 'saurav',
            middleName: "Abedin",
            lastname: "saurav"
        },
        contactNo: "01700000000",
        address: 'Uganda'
    }

    const { contactNo, name: { middleName:midName } } = user;

    // array destructuring
    const myFrinds = ['chander', 'joy','ross','rachel','monika', 'phoebe'];
    const [,,bestfriend, ...rest] = myFrinds;

}