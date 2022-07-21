let x: [string,number];
// Array와 약간 다르다

x = ["hello",22]

// x = [19,"hello"]
// 오류가 뜬다. 위에 선언한 타입과 순서가 다르기 때문.

// x[2] = "world";
// 위에 설정된 타입 이후에 뭔갈 추가하려고하면 undefined로 들어가기 때문에 에러 발생

const person1: [string,number] = ["jinwon",27];

// const [first,second,third] = person1;
// 이 tuple의 길이는 2이기 때문에 세 번쨰 값은 넣을 수 없다