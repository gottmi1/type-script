interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
  // a['어떤 것이든'] 처럼 들어올 수 있다
}

function hello3(person: Person3): void {
  console.log(`안녕하세요 ${person.name}입니다.`);
}

const p31: Person3 = {
  name: "jinwon"
}

const p32: Person3 = {
  name: "kim",
  systers: ['lee', 'park']
}

const p33: Person3 = {
  name: "um",
  father: p31,
  mother: p32,
}

hello3(p33);