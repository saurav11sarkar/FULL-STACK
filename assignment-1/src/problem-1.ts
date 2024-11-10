{
    // problam-1:
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    function sumArray(numbers: number[]): number {
        const sumNumber = numbers.reduce((pre, curr) => pre + curr, 0);
        return sumNumber;
    }

    // console.log(sumArray([1, 2, 3, 4, 5]))
}