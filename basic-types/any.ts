// 쓰려면 정확하게 어떤 타입인지 알고 써야한다.
function returnAny(msg :any): any {
  console.log(msg);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString();
// any1이 any타입이기 때문에 어떤 메서드를 쓰던 에러가 뜨지 않음.
// 잘 모르면 가능한한 사용하지 않는 편이 좋다
// 귀찮아서 여기저기서 사용하면 타입 안정성을 읽게 됨. 그러면 타입스크립트를 사용하는 의미가 없음

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d.e.f.g.h;
// 에러가 없음

function leakingAny(obj:any) {
  const a :number= obj.num;
  // 여기서 타입을 정의해주면 이후 누수를 막을수 있다.
  const b = a + 1;
  return b;
}

const c = leakingAny({num : 0});
// 이렇게 any를 한번 사용하게 되면 여기서 파생된 코드의 타입은 모두any가 되어버린다.