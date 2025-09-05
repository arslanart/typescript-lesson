//ฟังก์ชันที่มีค่าเริ่มต้น
function userInfo(name: string, age: number = 180000): void {
  console.log(`Name: ${name}, Age: ${age}`);
}

userInfo("Alice", 30); // Name: Alice, Age: 30
userInfo("Bob", 25);   // Name: Bob, Age: 25
userInfo("Charlie");    // Name: Charlie, Age: 18