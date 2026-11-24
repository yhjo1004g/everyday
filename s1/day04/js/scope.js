function makeTotal() {
    const total = 8;
    console.log("makeTotal 안: " + total);
}

function makeOther() {
    const total = 20;
    console.log("makeOther 안: " + total);
}

makeTotal();
makeOther();
// console.log(total);

const maxCredit = 18;
let myTotal = 0;

function isOver(total) {
    return total > maxCredit;
} 

function addCredit(credit) {
    myTotal = myTotal + credit;
}

console.log(isOver(19));
console.log(isOver(15));

addCredit(3);
addCredit(3);
console.log(myTotal);

if (true) {
    const message = "블록 안";
    console.log(message);
}
// console.log(message);

for (let i = 0; i < 2; i++) {
    console.log("i = " + i);
}

var a = 1;
var a = 2;
console.log(a);

if (true) {
    var b = "블록 안의 var";
}
console.log(b);

console.log(c);
var c = 3;

const double = function (n) {
    return n * 2;
};

const triple = (n) => {
    return n * 3;
};

console.log(double(4));
console.log(triple(4));

const square = (n) => n * n;
const plus = (a, b) => a + b;
const hello = () => "안녕";

console.log(square(5));
console.log(plus(2, 3));
console.log(hello());

function sayHi() {
    console.log("안녕하세요");
}

function run(fn) {
    fn();
}

run(sayHi);

function repeat(times, fn) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

repeat(3, sayHi);

function sayBye() {
    console.log("안녕히 가세요");
}
repeat(2, sayBye); 

repeat(2, () => {
    console.log("화살표 함수");
});

function eachCourse(list, fn) {
    for (let i = 0; i <list.length; i++) {
        fn(list[i]);
    }
}

const titles = ["자료구조", "데이터베이스", "웹 프로그래밍"];
eachCourse(titles, (title) => {
    console.log("과목: " + title);
})

