function helloArray<T>(msg: T[]): T {
  return msg[0];
}

helloArray(["hello", "world", 33]);
helloArray(["hello", 27])

function helloTuple<T, K>(msg: [T, K]): T {
  return msg[0];
}

helloTuple(["문", "자열"]);
helloTuple(["문자열", 22])