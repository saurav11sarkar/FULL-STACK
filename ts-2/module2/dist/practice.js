"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // Task-1
    const firstOutput = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
    console.log(firstOutput);
    // Task-2
    const displayUserInfo = (name, age, role = 'guest') => {
        console.log(`Name ${name}`);
        console.log(`Age ${age}`);
        console.log(`Role ${role}`);
    };
    displayUserInfo('Alica', 25);
    const personExample = {
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
    };
    console.log(personExample);
    const bookExample = {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        publishYear: 1925
    };
    console.log(bookExample);
    const bookMagazineExample = {
        title: "Time Special Edition",
        author: "Various",
        pages: 120,
        publishYear: 2023,
        issueNumber: 15,
        publishMounth: "March",
    };
    console.log(bookMagazineExample);
    // Task-5
    const reverseString = (input) => {
        const reverste = input.split('').reverse().join('');
        return reverste;
    };
    console.log(reverseString('hello'));
    // Task-6
    const allsum = (...numbers) => {
        const sumnumber = numbers.reduce((prev, curr) => prev + curr);
        return sumnumber;
    };
    console.log(allsum(1, 2, 3, 4));
    // Task-7
    const parameter = (params) => {
        if (typeof params === 'number') {
            return params * params;
        }
        else {
            return params.length;
        }
    };
    console.log(parameter('10'));
    const describeAdmin = (user) => {
        return `Admin ${user.name} with email ${user.email} is at level ${user.adminlevel}`;
    };
    const admin = {
        name: 'saurav',
        email: 'sarkar@gmail.com',
        adminlevel: 4
    };
    console.log(describeAdmin(admin));
    const getEmployeeCity = (employ) => {
        var _a;
        return (_a = employ.address) === null || _a === void 0 ? void 0 : _a.city;
    };
    const employes = {
        name: 'sarkar',
        address: {
            city: 'New work'
        }
    };
    console.log(getEmployeeCity(employes));
    // Task-10
    const getDisplayname = (name) => {
        return name !== null && name !== void 0 ? name : 'Anonymous';
    };
    console.log(getDisplayname(null));
    // Task-11
    const processData = (data) => {
        if (typeof data === 'string') {
            return data.toUpperCase();
        }
        else if (typeof data === 'number') {
            return Math.pow(data, 2);
        }
    };
    console.log(processData('saurav'));
    // Task-12
    const handleError = (message) => {
        throw new Error(message);
    };
    try {
        handleError('Something went wrong!');
    }
    catch (error) {
        console.error(error);
    }
    // Task-13
    const removeDuplicates = (array) => {
        const uniuen = new Set(array);
        return Array.from(uniuen);
    };
    const numberArray = [1, 2, 2, 3, 4, 4, 5];
    const stringArray = ["apple", "banana", "apple", "orange"];
    console.log(removeDuplicates(numberArray));
    console.log(removeDuplicates(stringArray));
    const fetchUserdata = () => __awaiter(void 0, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 1000));
        const user = {
            name: 'saurav',
            age: 24
        };
        return user;
    });
    fetchUserdata()
        .then(user => {
            console.log(`Name: ${user.name}, Age: ${user.age}`);
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
    // Task-15
    const isString = (value) => {
        return typeof value === 'string';
    };
    // console.log(isString('saurav'))
    const printUpperCase = (value) => {
        if (isString(value)) {
            console.log(value.toUpperCase());
        }
        else {
            console.log("The provided value is not a string.");
        }
    };
    printUpperCase('hello');
    printUpperCase(42);
    printUpperCase(null);
    // Task-16
    const getGeneric = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'saurav sarkar',
        age: 25,
        email: 'saurav@gmail.com'
    };
    const username = getGeneric(user, 'name');
    console.log(username);
}
