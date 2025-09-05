// ฟังก์ชันที่คืนค่าจาก object
const position: { lat: number; long: number } = {
  lat: 10,
  long: 20,
};

function randomPosition(): { lat: number; long: number } {
  return { 
    lat: Math.random(), 
    long: Math.random()
  };
}
console.log(randomPosition());