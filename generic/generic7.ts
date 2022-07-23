interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: 'jinwon',
  age: 27
}

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
getProp(person, 'name')

// function setProp(obj: IPerson, key: 'name' | 'age', value: string | number) {
// 이 경우 name이면 string을, age면 number 알맞게 나와줘야 하는데 그렇지 않기 때문에 이렇게 사용하면 안된다.
// 위 getProp의 ket : 'name' | 'age' : string | number와 똑같은 상황.
//   obj[key] = value
//   return obj;
// }

// type Keys = keyof IPerson;

// const keys: Keys = "age";
// 자동완성으로 name이나 age가 나온다. age나 name을 가진 놈이란 뜻.

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value
}

setProp(person, "name", "kimjinwon");