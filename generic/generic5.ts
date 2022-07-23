class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age
  }
}

const p1 = new Person("Jinwon", 27);

const p2 = new Person<number, number>(23, 33);
const p3 = new Person<string, string>("23", "33");

