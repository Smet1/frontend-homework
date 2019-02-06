'use strict';

const max = numbers => Math.max(...numbers);

// const rle = function (string) {
const rle = string => {
    if (typeof(string) !== "string") {
        return;
    }

    let tmp = string[0];
    let counter = 1;
    let result = "";

    for (let i = 1; i <= string.length; i++) {
        if (string[i] === tmp) {
            counter++;
        } else {
            if (counter != 1) {
                result += (tmp + counter);
            } else {
                result += tmp;
            }
            tmp = string[i];
            counter = 1;
        }
    }

    return result;
}