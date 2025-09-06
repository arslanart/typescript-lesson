// Type Aliases
type Employee = {
  id: number;
  name: string;
  salary: number;
  phone: string;
};

let emp1: Employee = {
  id: 1,
  salary: 50000,
  name: "Alice",
  phone: "987-654-3210", 
};

let emp2: Employee = {
  id: 2,
  salary: 50000,
  name: "Andrew",
  phone: "456-789-1230", 
};
// แก้ไข properties ของ emp1
// emp1.name = "Bob"; // Valid
// emp1.phone = "123-456-7890"; // Valid
// emp1.salary = 60000; // Valid
// emp1.id = 2; // Valid

console.log(emp1, emp2);
