interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`안녕 하세요 저는 ${person.name}이고 ${person.age}살 입니다.`)
}

const p1: Person1 = {
  name: "jinwon",
  age: 27
}

hello1(p1);