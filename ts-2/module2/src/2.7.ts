{
    // generic constraint with keyof oprater
    type Vehicle = {
        bick: string;
        car: string;
        ship: string
    }

    type Owner = "bick" | 'Car' | 'ship';

    type Owner2 = keyof Vehicle;

    const persoin1: Owner2 = 'bick';

    const getPropertyValue =<X,Y extends keyof X> (obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: 'Mr. persian',
        age: 26,
        address: 'ctg'
    }

    const car = {
        model:'Toyota 100',
        year:200,

    }
    const result1 = getPropertyValue(user, 'name');
    const result2 = getPropertyValue(car, 'model');



    // user['name']
}