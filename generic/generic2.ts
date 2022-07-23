function helloBasic<T, U>(msg: T, comment: U): T {
  return msg;
}

helloBasic<number, string>(12, "문자열");
helloBasic(12, 22);