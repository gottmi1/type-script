declare const maybe: unknown;

// const aNum: number = maybe;
// 언노운을 number에 바로 할당할 수 없음
// 만약 maybe가 any였다면 바로 통과가 되었을 것.

if (maybe === true) {
  // 이렇게 타입가드를 걸면 이 if문 안에서의 maybe는 boolean값이 된다.
  const aBoolean: boolean = maybe;

  // const aString: string = maybe;
  // error
}

if (typeof maybe === 'string') {
  // 마찬가지로 여기선 string값이 됨.
  const aString: string = maybe;
  // const aBoolean:boolean = maybe;
  // error
}