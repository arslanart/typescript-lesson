"use strict";
// Any และ Unknown
function formartNumber(num) {
    return num.toFixed(2);
}
let money = 32168.165; // ตัวแปรชนิด unknown
// ต้องตรวจสอบชนิดข้อมูลก่อนใช้งาน
if (typeof money === "number") {
    console.log(formartNumber(money));
}
