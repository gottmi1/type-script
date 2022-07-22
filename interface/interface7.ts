interface HelloPerson {
  (name: string, age?: number): void
}

const helloPerson: HelloPerson = function (name: string, age?: number) {
  console.log(`안녕 ${name}이다.`)
}

// 함수 인터페이스로 타입을 지정한 함수는 원래의 값과 다르면 에러가 발생함. 예를들어 name: string, 뒤에 age?: number가 아닌age : number를 입력하기만 해도 에러가 발생한다. 왜냐? age?:는 number|undefined인데 age:는 number 이기 때문에

helloPerson("jinwon")