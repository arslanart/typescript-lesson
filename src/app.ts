//OOP

//ไม่ระบุชนิดข้อมูล
const person = {
  name: "John",
  age: 30,
};

//ระบุชนิดข้อมูล
const person2: { name: string; age: number } = {
  name: "John",
  age: 30,
};

const position: {lat:number, long:number} = {
  lat: 10,
  long: 20
}

//ฟังก์ชันรับค่าจาก object
function showDetails(data: {name:string, age:number}){
  console.log(`My name is ${data.name} and I'm ${data.age} years old.`);
}

showDetails(person2);