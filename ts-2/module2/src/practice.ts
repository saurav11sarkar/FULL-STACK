{
    // Task-1
    const firstOutput: string = "Hello World, I will complete this course successfully and become a Next level Web Developer!";

    console.log(firstOutput);

    // Task-2

    const displayUserInfo = (name: string, age: number, role: 'admin' | 'user' | 'guest' = 'guest') => {
        console.log(`Name ${name}`);
        console.log(`Age ${age}`);
        console.log(`Role ${role}`);
    }

    displayUserInfo('Alica', 25);

    // TasK-3
    type Person = {
        Name: string;
        Address: string;
        HairColor: string;
        EyeColor: string;
        Income: number;
        Exprense: number;
        FamilyMember: {
            name: string;
            reletion: "parent" | "sibling" | "spouse" | "child" | "other";
            age: number;
        }[];
        job: {
            title: string;
            compony: string;
            yearsExperience: number;
        };
        Skills: string[];
        MaeitalStatus: "single" | "married" | "divorced" | "widowed";
        Friends?: {
            name: string;
            contact: string;
        }[];

    }

    const personExample: Person = {
        Name: 'saurav',
        Address: 'Dhaka',
        HairColor: 'Black',
        EyeColor: 'brownd',
        Exprense: 2,
        Income: 30000,
        FamilyMember: [
            { name: 'jyatia', reletion: 'other', age: 17 }
        ],
        job: {
            title: 'Web Developer',
            compony: 'BranStation',
            yearsExperience: 1
        },
        MaeitalStatus: 'single',
        Skills: ['html', 'css', 'javascript', 'typeScrip', 'nodejs', 'mongodb', 'reactjs'],
        Friends: [
            { name: 'Pranta', contact: '018374' }
        ]
    }

    console.log(personExample);

    // Task-4
    interface Book {
        title: string;
        author: string;
        pages: number;
        publishYear: number
    }
    interface Magazine {
        title: string;
        issueNumber: number;
        publishMounth: string;
        publishYear: number
    }
    // uion type
    type BookMagazineUni = Book | Magazine;

    const bookExample: BookMagazineUni = {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        publishYear: 1925
    }

    console.log(bookExample);

    // Intersection
    type BookMagazineInte = Book & Magazine;

    const bookMagazineExample: BookMagazineInte = {
        title: "Time Special Edition",
        author: "Various",
        pages: 120,
        publishYear: 2023,
        issueNumber: 15,
        publishMounth: "March",
    }
    console.log(bookMagazineExample);

    // Task-5
    const reverseString = (input: string): string => {
        const reverste = input.split('').reverse().join('');
        return reverste;
    }

    console.log(reverseString('hello'));

    // Task-6
    const allsum = (...numbers: number[]): number => {
        const sumnumber = numbers.reduce((prev, curr) => prev + curr);

        return sumnumber;
    }

    console.log(allsum(1, 2, 3, 4));

    // Task-7
    const parameter = (params: string | number): number => {
        if (typeof params === 'number') {
            return params * params
        } else {
            return params.length
        }
    }

    console.log(parameter('10'));

    // Task-8
    interface User {
        name: string;
        email: string;
    }
    interface Admin {
        adminlevel: number;
    }

    type AdminUser = User & Admin;

    const describeAdmin = (user: AdminUser): string => {
        return `Admin ${user.name} with email ${user.email} is at level ${user.adminlevel}`
    }

    const admin: AdminUser = {
        name: 'saurav',
        email: 'sarkar@gmail.com',
        adminlevel: 4
    }

    console.log(describeAdmin(admin));

    // Task-9
    type Employee = {
        name: string;
        address?: {
            city?: string
        }
    }

    const getEmployeeCity = (employ: Employee): string | undefined => {
        return employ.address?.city;
    }

    const employes: Employee = {
        name: 'sarkar',
        address: {
            city: 'New work'
        }
    }

    console.log(getEmployeeCity(employes));

    // Task-10
    const getDisplayname = (name: string | null | undefined): string => {
        return name ?? 'Anonymous'
    }

    console.log(getDisplayname(null))

    // Task-11
    const processData = (data: unknown): string | number | undefined => {
        if (typeof data === 'string') {
            return data.toUpperCase()
        } else if (typeof data === 'number') {
            return data ** 2
        }
    }

    console.log(processData('saurav'));

    // Task-12
    const handleError = (message: string): never => {
        throw new Error(message)
    }

    try {
        handleError('Something went wrong!')
    } catch (error) {
        console.error(error)
    }

    // Task-13
    const removeDuplicates = <T>(array: T[]): T[] => {
        const uniuen = new Set(array);
        return Array.from(uniuen);
    }

    const numberArray = [1, 2, 2, 3, 4, 4, 5];
    const stringArray = ["apple", "banana", "apple", "orange"];

    console.log(removeDuplicates(numberArray)); 
    console.log(removeDuplicates(stringArray));

    // Task-14
    type Users = {
        name:string;
        age:number;
    }

    const fetchUserdata = async(): Promise<Users> =>{
        await new Promise(resolve=>setTimeout(resolve, 1000))

        const user:Users = {
            name:'saurav',
            age:24
        }
        return user;
    } 

    fetchUserdata()
    .then(user=>{
        console.log( `Name: ${user.name}, Age: ${user.age}`);
    })
    .catch(error => {
        console.error("Error fetching user data:", error);
    })

    // Task-15
    const isString = (value:unknown):value is String =>{
        return typeof value === 'string'
    }
    // console.log(isString('saurav'))

    const printUpperCase = (value:unknown): void =>{
        if(isString(value)){
            console.log(value.toUpperCase())
        }else{
            console.log("The provided value is not a string.") 
        }
    }
    printUpperCase('hello');
    printUpperCase(42);
    printUpperCase(null);

    // Task-16
    const getGeneric = <T,K extends keyof T>(obj:T, key:K):T[K] =>{
        return obj[key]
    }

    const user = {
        name:'saurav sarkar',
        age:25,
        email:'saurav@gmail.com'
    }

    const username = getGeneric(user,'name')
    console.log(username)

}