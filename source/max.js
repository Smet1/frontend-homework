'use strict';

const max = numbers => Math.max(...numbers);

// const rle = function (string) {
const rle = string => {
    if (typeof(string) !== "string") {
        return;
    }

    let tmp = string[0];
    let counter = 0;
    let result = "";

    // работает, но ИМХО не оч
    // string += " ";  

    string.split('').forEach(element => {
        // с if else мб лучше будет
        tmp === element ? (
            counter++
        ) : (
            (counter === 1) ? result += tmp : result += (tmp + counter),
            tmp = element,
            counter = 1
        );
    });

    (counter === 1) ? result += tmp : result += (tmp + counter);

    return result;
}