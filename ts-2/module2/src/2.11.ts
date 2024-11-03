{
    //   utility types 
    // pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, "name" | 'age'>

    // Omit
    type ContactInfo = Omit<Person, "name" | 'age'>

    // Required
    type PersonRequried = Required<Person>

    // Partial
    type PersonPertial = Partial<Person>

    // ReadOnly
    type PersonReadOnly = Readonly<Person>
    const person1: PersonReadOnly = {
        name: "Mr.xy",
        age: 200,
        contactNo: "01717"
    }

    // Record

    // type MyObj = {
    //     a:string,
    //     b:string
    // }

    type MyObj = Record<string,string>

    const obj1: MyObj = {
        a:'aa',
        b:'bb',
        c:'cc',
        d:'dd'
    }

    const Emptyobj: Record<string,unknown> = {}


}