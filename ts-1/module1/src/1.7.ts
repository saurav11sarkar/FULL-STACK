{
    // spread oprator
    // rest oprator
    // destructing
const poorUser = {
    
};

// learn spread oprator
const bos1: string[] = ["mir", 'firoz', 'saurav'];
const bos2: string[] = ["tormoy", 'nadid', 'sarkar'];
bos1.push(...bos2);

const mentor1 = {
    typScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan"
}
const mentor2 = {
    prisma: "Mezba",
    next: "tormot",
    dbms: "nahid"
}

const mentorList = {
    ...mentor1,
    ...mentor2
}

// learn rest oprator
const greetFrineds = (...friends: string[])=>{
    friends.forEach((friend:String) => console.log(friend))
}

greetFrineds("Abul", "Kabul", "Babul", "Ubul");

}