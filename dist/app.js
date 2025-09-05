"use strict";
// ฟังก์ชันที่คืนค่าจาก object
const position = {
    lat: 10,
    long: 20,
};
function randomPosition() {
    return {
        lat: Math.random(),
        long: Math.random()
    };
}
console.log(randomPosition());
