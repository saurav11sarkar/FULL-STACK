{
    // concept
    const age: number = 25;
    const name: string = "saurav sarkar";
    const isActive: boolean = true;

    console.log(name, age, isActive);

    // array
    const numbers: number[] = [1, 2, 3, 4, 5, 6];

    // tupal
    const info: [string, string, string, number, boolean, null, undefined] = ["Fahim", "saurav", 'sarkar', 1, true, null, undefined];

    // object
    type Person = {
        name: string;
        age: number | string;
        isActive: boolean;
        desgnation: string;
        company: string;
        salary?:number;
    }

    const persoin: Person = {
        name: 'saurav',
        age: '20',
        isActive: false,
        desgnation: "next level Developer",
        company: "Programming Hero"
    }

    const newParsoin:Person = {
        ...persoin,
        salary:10000
    }
    console.log(newParsoin)

    // console.log(persoin);


    // normal function arrow function
    function multiPlay(num1: number, num2: number): number {
        const result: number = num1 * num2;
        return result
    }
    console.log(multiPlay(3, 6));

    // splid oprator
    const rolls: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const newRolls: number[] = [...rolls, 11, 12, 13, 14, 15, 16];
    // console.log(newRolls);

    function repet(str:string, num:number){
        let newstr = []
        for(let i = 0; i < num; i++){
            newstr.push(str)
        }
        return newstr.join('')
    }
    console.log(repet('hello',3))

    function maxnum (num1: number[]){
        let x = 0
        for(let i = 0; i < num1.length; i++){
            if(x < num1[i]){
                x = num1[i]
            }    
        }
        return x;
    }

    console.log(maxnum([1,20,30,34,1,4,54]))







}