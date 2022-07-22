interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;
  constructor(name: string) {
    this.name = name;
  }
  hello(): void {
    console.log(`${this.name}입니다1`)
  }
}

const person: IPerson1 = new Person("jinwon");
person.hello()