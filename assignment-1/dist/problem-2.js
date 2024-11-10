"use strict";
{
    // problem-2
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
    function removeDuplicates(numbers) {
        let newArray = [];
        for (let i = 0; i < numbers.length; i++) {
            if (!newArray.includes(numbers[i])) {
                newArray.push(numbers[i]);
            }
        }
        return newArray;
    }
    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
}
