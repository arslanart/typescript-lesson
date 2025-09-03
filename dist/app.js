"use strict";
let amount = 10;
let result;
if (amount % 2 === 0) {
    result = "Even";
}
else {
    result = "Odd";
}
result = amount % 2 === 0 ? "Even" : "Odd";
console.log(`จำนวน = ${amount} เป็น ${result}`);
