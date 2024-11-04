{
    // oop- inheritence

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours} houre`);
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }


    }

    class Teacher extends Person {  
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }

        tackClass(numOfClass: number) {
            console.log(`${this.name} will tack class ${numOfClass} houre`)
        }
    }

    const student1 = new Student("Mr.student", 20, 'Uganda');
    const teacher1 = new Teacher("Mr.teacther", 40, 'Uganda', 'Profasser');

    student1.getSleep(8);

    teacher1.tackClass(6);
}