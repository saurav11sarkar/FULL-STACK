{
    const createArray = (param: string): string[] => {
        return [param]
    }

    const res1 = createArray('Bangladesh');
    console.log(res1);

    const createArrayWithGener = <T>(param: T): T[] => {
        return [param]
    }
    const res2 = createArrayWithGener<number>(120);
    console.log(res2);

    const res3 = createArrayWithGener<{ id: number, name: string }>({ id: 222, name: "Mr.x" })
    console.log(res3);

    // function tuple
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res4 = createArrayWithTuple<number, string>(12, 'saurav');
    console.log(res4);

    const res5 = createArrayWithTuple<string, { name: string, age: number }>('Bangladesh', { name: 'Ahia', age: 25 });
    console.log(res5);


    const addCourseToStudent = <T>(student: T) => {
        const course = "next Level Web Development"

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name:'Mr.X', email:'x@gmail.com', devType: "NLWD"});

    const student2 = addCourseToStudent({name:'Mr.Y', email:'Y@gmail.com', hasWatch: "Apple Watch"});

    console.log(student2)
}