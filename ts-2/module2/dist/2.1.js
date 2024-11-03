"use strict";
{
    // type assertion
    let anything;
    anything = "Next Level Web development";
    anything = 222;
    anything;
    const khToGm = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `the converted value is : ${convertedValue}`;
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result1 = khToGm(1000);
    const result2 = khToGm('1000');
    console.log(result2);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
