"use strict";
//ฟังก์ชัน =>
const checkNumber = (num) => {
    if (num > 0) {
        return "Positive number";
    }
    else if (num < 0) {
        return "Negative number";
    }
    return "Zero";
};
console.log(checkNumber(10));
