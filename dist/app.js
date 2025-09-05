"use strict";
//OOP
//ไม่ระบุชนิดข้อมูล
const person = {
    name: "John",
    age: 30,
};
//ระบุชนิดข้อมูล
const person2 = {
    name: "John",
    age: 30,
};
const position = {
    lat: 10,
    long: 20
};
//ฟังก์ชันรับค่าจาก object
function showDetails(data) {
    console.log(`My name is ${data.name} and I'm ${data.age} years old.`);
}
showDetails(person2);
