"use strict";
{
    const createArray = (param) => {
        return [param];
    };
    const res1 = createArray('Bangladesh');
    console.log(res1);
    const createArrayWithGener = (param) => {
        return [param];
    };
    const res2 = createArrayWithGener(120);
    console.log(res2);
    const res3 = createArrayWithGener({ id: 222, name: "Mr.x" });
    console.log(res3);
    // function tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res4 = createArrayWithTuple(12, 'saurav');
    console.log(res4);
    const res5 = createArrayWithTuple('Bangladesh', { name: 'Ahia', age: 25 });
    console.log(res5);
    const addCourseToStudent = (student) => {
        const course = "next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'Mr.X', email: 'x@gmail.com', devType: "NLWD" });
    const student2 = addCourseToStudent({ name: 'Mr.Y', email: 'Y@gmail.com', hasWatch: "Apple Watch" });
    console.log(student2);
}
