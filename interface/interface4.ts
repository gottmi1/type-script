interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: 'jinwon',
  age: 27,
  hello: function (): void {
    console.log(`안녕하세요! ${this.name}입니다`)
  }
}
// 방식1

const p42: Person4 = {
  name: 'jinwon',
  age: 27,
  hello(): void {
    console.log(`안녕하세요! ${this.name}입니다`)
  }
}
// 방식2

// const p43: Person4 = {
//   name: 'jinwon',
//   age: 27,
//   hello: (): void => {
//     console.log(`안녕하세요! ${this.name}입니다`)
//   }
// }
// arrow function을 사용하면 this때문에 문제가 생김

p41.hello()
p42.hello()