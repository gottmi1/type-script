// class Person {
//   name;
//   // 먼저 프로퍼티를 만든다
//   constructor(name: String) {
//     this.name = name;
//   }
//   // 그 후 constructor로 앞서 만든 prop의 타입을 정해주고 this.prop = prop식으로 변경해줌.
// }
// 가장 간단한 형태의 class

// class Person {
//   public name: string;
//   public age: number;

//   // constructor에는 async를 붙일 수 없음.
//   constructor(name: string, age?: number) { // private를 설정하면 외부에서 접근할 수 없기 때문에 new를 호출할 수가 없다.
//     // 옵셔널 타입을 설정하려면, undefined인 상태에도 대비해야 한다.
//     if (age === undefined) {
//       this.age = 20
//     } else {
//       this.age = age;
//     }
//     this.name = name;
//   }
// }

class Person {
  public readonly name: string = "jinwon";
  // 퍼블릭이라 밖에서 접근 가능하지만 readonly라서 변경할 수 없게 만든다
  private readonly country: string;
  // 프라이빗이라 안에서는 바꿀 수 있어야 하는 상황에서도 readonly로 인해 변경할 수 없다.

  constructor(private _name: string, private _age: number) {
    this.country = "Korea";
    // 위에서 선언만 해 놓은 상태이기 때문에 할당만 가능하다.
  }
  // prviate항목은 출력은 가능하지만 .으로 접근할 수 없음
  // get name() {
  //   return this._name + " kim";
  // }
  // set name(name: string) {
  //   this._name = name;
  // }
  // 얘를 실행할 땐 함수를 실행() 시키지 않고 그냥 불러온다.
}

const p1 = new Person("jinwon", 27);

console.log(p1)
console.log(p1.name);
// p1.name = "won kim";
console.log(p1);
