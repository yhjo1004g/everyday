const capacity = 30;
const enrolled = 28;
const myTotal = 15;
const credit = 3;

if (enrolled < capacity && myTotal + credit <= 18) {
    console.log("담기 가능");
} else {
    console.log("담을 수 없음");
}

const isFull = false;
console.log(!isFull);
console.log(isFull || myTotal > 18);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

const courses = ["자료구조", "데이터베이스", "웹 프로그래밍",];
console.log(courses[0]);
console.log(courses[2]);
console.log(courses.length);
console.log(courses[5]);

for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

const credits = [3, 3, 2, 3, 3, 2, 3];
let total =0;

for (let i = 0; i < credits.length; i++) {
    total = total + credits[i];
}

console.log("학점 합계: " + total);
if (total > 18) {
    console.log("학점 초과");
}

let count = 0;

for (let i = 0; i < credits.length; i++) {
    if (credits[i] === 3) {
        count = count + 1;
    }
}

console.log("3학점 과목: " + count);

