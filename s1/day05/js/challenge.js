const student = {
    name: "홍길동",
    year: 2,
    major: "컴퓨터공학",
};

console.log(student.name);
console.log(student.year);

student.year = 3;
student.email = "hong@test.com"

console.log(student.year);
console.log(student.email);

console.log(`${student.name} (${student.major}) ${student.year} 학년`);

const scores = [
    { subject: "국어", score: 80 },
    { subject: "영어", score: 95 },
    { subject: "수학", score: 70 },
];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i].subject + ": " + scores[i].score + "점")
}

function bestSubject(list) {
    let best = list[0];
    for (let i = 0; i < list.length; i++) {
        if (best.score < list[i].score) {
            best = list[i];
        }
    }
    return best.subject;
}

console.log(bestSubject(scores));

const email = " hong@test.com "

console.log(email.trim().toLowerCase());
console.log("hong@test.com".includes("@"));

const scoreText = "80,95,70";
const scoreList = scoreText.split(",");
let sum = 0;
for (let i = 0; i < scoreList.length; i++) {
    scoreList[i] = Number(scoreList[i]);
    sum += scoreList[i];
}
const average = sum / scoreList.length;

console.log(sum);
console.log(average.toFixed(1));