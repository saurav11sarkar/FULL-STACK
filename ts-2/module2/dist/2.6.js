"use strict";
{
    // constraints
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 222,
        name: "Mr.X",
        email: 'X@gmail.com',
        devType: "NLWD"
    });
    const student2 = addCourseToStudent({
        id: 333,
        name: "Mr.X",
        email: 'X@gmail.com',
        hasWatch: "Apple Watch"
    });
}
