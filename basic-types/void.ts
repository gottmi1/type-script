function returnVoid(msg:string) {
  console.log(msg);

  return;
}
// 리턴값이 없으면 void 타입으로 추론이 됨.
const r = returnVoid('리턴이 없음');
// r의 타입이 void가 된다

