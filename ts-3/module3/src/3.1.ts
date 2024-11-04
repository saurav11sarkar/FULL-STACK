{
    // oop - class

    class Animal {
        // parameter properties

        constructor(public name: string, public species: string, public sound: string) {}

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal('German Shepard', 'Dog', 'Ghew ghew');
    
    const cat = new Animal("Persian bai", 'Cat', 'Meaw Meaw');

    dog.makeSound();


}