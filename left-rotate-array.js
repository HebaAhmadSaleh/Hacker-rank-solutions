// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem


export const rotLeft = (arr, d) => {
    for (let i = 0; i < d; i++) {
        let firstNumber = arr.shift(1);
        arr.push(firstNumber);
    }
    return arr;
};


console.log(rotLeft([1, 2, 3, 4, 5], 4);
