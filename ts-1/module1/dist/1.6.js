"use strict";
{
    // Larning function
    // Normol function
    // Arrow function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 2);
    const addArow = (num1, num2) => {
        return num1 + num2;
    };
    const poorUser = {
        name: "Saurav",
        balance: 0,
        addBance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        },
    };
    console.log(poorUser.addBance(10));
    const arr = [1, 4, 10];
    const newArray = arr.map((elem) => elem * elem);
}
