function error(msg:string) :never {
  throw new Error(msg);
}

function fail() {
  return error('failed');
}
// 에러를 리턴하면 자동으로 never 함수라고 추론한다.

function infiniteLoop():never {
  while(true) {}
}
// 무한 루프하는 상황에서도 사용 가능.

declare const a:string|number;

if ( typeof a !== 'string') {
  a;
}
// a에 string이 할당되었는데 string이 아닐경우의 if문을 만들었으니 a는 never type이 됨.(아무것도 할 수 없는 상태가 된다)
// a에 유니온타입을 적용하면 나머지 never가 아닌 나머지 타입이 나옴.

type Indexable<T> = T extends string ? T & { [ index : string] : any} : never;

type ObjectIndexable = Indexable<{}>;
// 이렇게 사용한다고 함.. 잘못된 타입을 넣으면 에러가 뜨게 만들 수 있음.