{
    // Abstraction
    // 1--> interface
    // 2--> abstract

    interface Vehicle1 {
        startEngine(): void;
        stoprEngine(): void;
        move(): void;
    }

    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log("I am strating the car engine")
        }
        stoprEngine(): void {
            console.log("I am stoping car engine")
        }
        move(): void {
            console.log("I am moving the car")
        }

        test() {
            console.log("I am testing the car")
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();

    // abstract
    abstract class Car2 {
        abstract startEngine(): void
        abstract stoprEngine(): void
        abstract move(): void

        test() {
            console.log("I am testing the car")
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log("I am strating the car engine")
        }

        stoprEngine(): void {
            console.log("I am stoping car engine")
        }
        move(): void {
            console.log("I am moving the car")
        }
    }
    const hondacar = new ToyotaCar();
    hondacar.test()
}