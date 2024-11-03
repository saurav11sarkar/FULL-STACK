"use strict";
{
    // mapped types
    const arrOfNumbers = [1, 4, 5];
    // const arrOfString : string[] = ['1','4','5'];
    const arrOfString = arrOfNumbers.map(number => number.toString());
    console.log(arrOfString);
    const area1 = {
        height: '100',
        width: 50
    };
}
