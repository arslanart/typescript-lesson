//ฟังกก์ชัน void
// function sayHello(){
//     console.log("Hello, TypeScript!");
// }

// sayHello();

//ฟังก์ชันที่มีการส่ง Parameter
// function sayHello(name: string): void {
//     console.log (`Hello, ${name}!`);
// }

// sayHello("TypeScript");

//ฟังก์ชันที่มีการส่งค่ากลับ Return Type
// function getDiscount(): number {
//   return 500;
// }

// console.log(getDiscount());

//ฟังก์ชันที่มีการส่ง Parameter และค่ากลับ
function checkNumber(num: number): string {
  if (num % 2 === 0) {
    return `${num} is an even number.`;
  } else {
    return `${num} is an odd number.`;
  }
}

function total(a: number, b: number): number {
  return a + b;
}

console.log(total(100, 200));
console.log(checkNumber(5));