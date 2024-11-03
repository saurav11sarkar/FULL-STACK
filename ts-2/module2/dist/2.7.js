"use strict";
{
    const persoin1 = 'bick';
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'Mr. persian',
        age: 26,
        address: 'ctg'
    };
    const car = {
        model: 'Toyota 100',
        year: 200,
    };
    const result1 = getPropertyValue(user, 'name');
    const result2 = getPropertyValue(car, 'model');
    // user['name']
}
