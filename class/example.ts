function Signature() {
  class Students {
    // mark: string = 'male';
    [index: string]: 'male' | 'female'; // string을 사용해도 되지만 이렇게 하는 게 더 정확함. 
    jinwon: 'male' = "male"; // 꼭 포함해야 할 값일 때는 이렇게 해줄 수 있다.
  }

  const Aclass = new Students();
  Aclass.mark = "male";
  Aclass.kim = "male"

  console.log(Aclass);

  const Bclass = new Students();
  Bclass.chloe = "female";
  Bclass.anna = "female"

  console.log(Bclass);
}

function Static() {
  class Person {
    private static CITY = 'Deajeon';

    public hello() {
      console.log('hello', Person.CITY)
    }
    public change() {
      Person.CITY = 'Seoul'
    }
  }

  const p1 = new Person();

  const p2 = new Person();

  p1.hello();
  p2.hello();

  p1.change()
  p2.hello();
}

function Singletons() {
  class ClassName {
    private static instance: ClassName | null = null;
    public static getInstance() {
      // 없으면 만들어서 리턴.
      if (this.instance === null) {
        ClassName.instance = new ClassName();
        // 프라이빗이라 클래스 내에선 new를 사용할 수 있음.
      }
      // ClassName으로부터 만든 객체가 있다면 그걸 리턴 === 처음 만들어진 순간부터는 리턴받은 것이 모두 같은 객체라는 뜻
      return ClassName.instance;
    }
    private constructor() { }
    // 컨스트럭터에 프라이빗을 달면 밖에서 new로 생성할 수가 없어진다
  }
  // 싱글톤 패턴은 클래스로 오브젝트를 단 하나만 찍어내 사용하는 단일객체 패턴이다.

  const c1 = ClassName.getInstance()

  const c2 = ClassName.getInstance()
  // new로 새로운 객체를 만들면 각각 다른 객체로 판정되기 때문에 싱글톤 패턴에서는 new라는 키워드를 사용하면 안된다.

  console.log(c1 === c2); //true
}


function Inheritance() {
  class Parent {
    constructor(protected _name: string, private _age: number) {

    }
    public print(): void {
      console.log(`이름 ${this._name}, 나이 ${this._age}`);
    }
    protected printName() {
      console.log(this._name, this._age);
    }
  }

  // const p1 = new Parent("jinwon", 27);
  // p1.print();

  class Child extends Parent {
    constructor(age: number) {
      super("Jinwon Jr", age);
      // 상속받은 클래스의 컨스트럭터에서 부모 클래스의 메서드를 사용하고 싶다면 먼저 super부터 실행해줘야 한다. 왜냐하면 Parent의 this._name이나 _age는 아직 할당이 되지 않았기 때문.
      this.printName();
    }
  }

  const c1 = new Child(22)
  c1.print();
}

function Abstract() {
  abstract class AbstractPerson {
    protected _name: string = "jinwon";

    // abstract를 사용할 땐 클래스에도 abstract클래스 임을 명시해야 한다.
    abstract setName(name: string): void;
    // 메서드를 만들었는데 기능이 없음(완전하지 않음)
  }

  class Person extends AbstractPerson {
    setName(name: string): void {
      this._name = name;
    }
  }

  const p = new Person();
  p.setName("jinwon")
  console.log(p);
}