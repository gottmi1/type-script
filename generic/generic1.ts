function helloString(msg: string): string {
  return msg;
}

function helloNumber(msg: number): number {
  return msg;
}

// 함수의 인자와 리턴의 타입이 일정하면 더 많은 반복될 함수들이 생성될 것임..
function hello(msg: any): any {
  return msg;
}

console.log(hello('asdas').length);
console.log(hello(39).length);
// 이 때 length의 타입도 any가 된다

function helloGeneric<T>(msg: T): T {
  return msg;
}

console.log(helloGeneric("Jinwon"));
// 이 때 타입이 string이 아니라 문자열 리터럴로 받은 것이 됨 이 경우 타입이 "Jinwon"이 된다.(문자열 리터럴 타입)
console.log(helloGeneric("Jinwon").length);
// 제네릭이 아닌경우 length가 any가 되는데 위와 같은 경우 제대로 추론된다. .으로 문자열 메서드 자동완성이 가능함
console.log(helloGeneric(39));
console.log(helloGeneric(true));
