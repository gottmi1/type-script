"use strict";
function hello1(person) {
    console.log(`안녕 하세요 저는 ${person.name}이고 ${person.age}살 입니다.`);
}
const p1 = {
    name: "jinwon",
    age: 27
};
hello1(p1);
