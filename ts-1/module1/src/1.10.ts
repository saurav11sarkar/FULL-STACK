{
// 

    // union types
    type FortendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';

    type FullStackDeveloper = 'fortendDeveloper' | 'expertDeveloper';

    type Develope = FortendDeveloper | FullStackDeveloper;

    const newDeveloper: FortendDeveloper = 'fakibazDeveloper';
    type User = {
        name: string;
        email?: string;
        gender: 'Male' | 'Female';
        bloodGroup: "O+" | "A+" | "B+";
    }

    const user1: User = {
        name: 'Saurav',
        gender: "Male",
        bloodGroup: 'B+'
    }


    type FondentDevelopes = {
        skills : string[];
        designation1:"Fontend Developer"
    }
    type BackendDevelopers = {
        skills : string[];
        designation2:"Backend Developer"
    }

    type FullStackDevelopers = FondentDevelopes & BackendDevelopers

    const fullStackDeveloper: FullStackDevelopers = {
        skills:['javascript', 'html', 'css', 'express'],
        designation1: 'Fontend Developer',
        designation2: 'Backend Developer'
    } 

// 
}