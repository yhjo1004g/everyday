const hours = 3;
const isWeekend = false;

if (hours <= 4 && !isWeekend ) {
    console.log("평일 목표 달성");
} else {
    console.log("목표 미달"); 
}

console.log(isWeekend || hours > 5);

for (let i = 10; i <= 50; i+=10) {
    console.log(i);
}

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(sum);

const days = ["월", "화", "수", "목", "금", "토", "일",];
console.log(days[0]);
console.log(days[6]);
console.log(days.length);

const studyHours = [2, 3, 1, 4, 2, 5, 3];
for (let i = 0; i < days.length; i++) {
    console.log(days[i]+":"+ studyHours[i]+"시간");
}

let weekTotal = 0;

for (let i = 0; i < studyHours.length; i++) {
    weekTotal = weekTotal + studyHours[i];
}
console.log("이번 주 공부: " + weekTotal+"시간");

if (weekTotal >= 20) {
    console.log("주간 목표 달성");
}

let goodDays = 0; 
for (let i = 0; i <= studyHours.length; i++) {
    if (studyHours[i] >= 3) { 
        goodDays = goodDays + 1;
    }
} console.log("3시간 이상: " + goodDays + "일");

