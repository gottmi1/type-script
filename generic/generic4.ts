type helloFuntionGeneric1 = <T>(msg: T) => T;
// 타입 알리아스를 사용한 방법

const helloFuntion1: helloFuntionGeneric1 = <T>(msg: T): T => {
  return msg;
}


interface helloFuntionGeneric2 {
  <T>(msg: T): T;
}
// 인터페이스를 사용한 방법

const helloFuntion2: helloFuntionGeneric2 = <T>(msg: T): T => {
  return msg;
}