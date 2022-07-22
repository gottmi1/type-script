interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`${person.name}이다`)
}

hello2({ name: "kim", age: 22 })
hello2({ name: "kim" })