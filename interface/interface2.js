"use strict";
function hello2(person) {
    console.log(`${person.name}이다`);
}
hello2({ name: "kim", age: 22 });
hello2({ name: "kim" });
