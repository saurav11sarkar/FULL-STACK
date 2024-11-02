"use strict";
{
    // spread oprator
    // rest oprator
    // destructing
    const poorUser = {};
    // learn spread oprator
    const bos1 = ["mir", 'firoz', 'saurav'];
    const bos2 = ["tormoy", 'nadid', 'sarkar'];
    bos1.push(...bos2);
    const mentor1 = {
        typScript: "Mezba",
        redux: "Mir",
        dbms: "Mizan"
    };
    const mentor2 = {
        prisma: "Mezba",
        next: "tormot",
        dbms: "nahid"
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    // learn rest oprator
    const greetFrineds = (...friends) => {
        friends.forEach((friend) => console.log(friend));
    };
    greetFrineds("Abul", "Kabul", "Babul", "Ubul");
}
