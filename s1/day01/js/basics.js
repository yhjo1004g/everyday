console.log("안녕하세요, Javascript");
console.log(2026);
console.log("2026");

console.log(typeof 3);
console.log(typeof "3");
console.log(typeof true);

const studentName = "김이박최";
let  credit = 3;
console.log(studentName);
console.log(credit);

credit = 4;
console.log(credit);

const credit1 = 3;
const credit2 = 3;
const credit3 = 2;
const total = credit1 + credit2 + credit3;
console.log(total);
console.log("학점 합계: " + total);
console.log("3" + 1);
console.log(3 + 1);
console.log(10 % 3);

console.log(total > 18);
console.log(total <= 18);
console.log(total === 8);
console.log("8" === 8);
console.log(total !== 0);

const maxCredit = 18;

if (total > maxCredit) {
    console.log("학점 초과");
} else {
    console.log("신청 가능");
}

const seatLeft = 3;

if (seatLeft === 0) {
    console.log("마감");
} else if (seatLeft <= 5 ) {
    console.log("마감 임박");
} else {
    console.log("신청 가능");
}

const capacity = 30;
const enrolled = 28;

if (enrolled < capacity) {
    console.log("남은 자리 " + (capacity - enrolled));
} else {
    console.log("마감");
}

