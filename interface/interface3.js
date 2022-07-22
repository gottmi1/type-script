"use strict";
function hello3(person) {
    console.log(`안녕하세요 ${person.name}입니다.`);
}
const p31 = {
    name: "jinwon"
};
const p32 = {
    name: "kim",
    systers: ['lee', 'park']
};
const p33 = {
    name: "um",
    father: p31,
    mother: p32,
};
hello3(p33);
