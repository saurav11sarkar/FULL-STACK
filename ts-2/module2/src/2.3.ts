{
    // generic type
    type GenericArray<T> = Array<T> 

    // const rollNumbers : number[] = [3,6,8];
    const rollNumbers: GenericArray<number> = [3, 6, 8];

    // const mentors: string[] = ['Mr.x', 'Mr.y', 'My.z'];
    const mentors: Array<string> = ['Mr.x', 'Mr.y', 'My.z'];

    // const boolArray:boolean[] = [true, false,true];
    const boolArray: Array<boolean> = [true, false, true];

    const use:GenericArray<{name:string, age:number}> = [
        {name: 'Saurav',age:100},
        {name: 'Sarkar',age:200},
    ]

    const add = (x:number, y:number) => x+y;
    add(30,20)


    // generic tuple
    type GenericTuple<X,Y> = [X,Y]
    const manuser: GenericTuple<string,string> = ['Mr.x','Mr.y']

    const uderId: GenericTuple<number,{name:string,email:string}> = [1234,{name:'saurav', email:'saurav@gmail.com'}];
}