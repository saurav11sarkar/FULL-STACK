{
    // problem-7
    // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge() {
            const currentYear = new Date().getFullYear();
            const year = currentYear - this.year;
            return `${year} (assuming current year is ${currentYear})`;
        }

    }

    // const car = new Car("Honda", "Civic", 2018);
    // console.log(car.getCarAge());
}