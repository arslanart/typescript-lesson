let service: number = 0;
let result: string;

switch (service) {
  case 1:
    result = "สอบถามยอดเงินในบัญชี";
    break;
  case 2:
    result = "ฝากเงินเข้าบัญชี";
    break;
  case 3:
    result = "ถอนเงินจากบัญชี";
    break;
  default:
    result = "บริการอื่นๆ";
    break;
}
console.log(`result = ${result}`);
