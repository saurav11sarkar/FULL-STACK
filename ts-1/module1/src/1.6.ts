{
// Larning function
// Normol function
// Arrow function

function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(2, 2)

const addArow = (num1: number, num2: number): number => {
    return num1 + num2
}

const poorUser = {
    name: "Saurav",
    balance: 0,
    addBance(balance: number): string {
        return `My new balance is : ${this.balance + balance}`
    },
};

console.log(poorUser.addBance(10));

const arr: number[] = [1, 4, 10];
const newArray: number[] = arr.map((elem: number): number => elem * elem);

}