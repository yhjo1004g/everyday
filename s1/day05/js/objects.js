const course = {
    code: "CS101",
    title: "웹 프로그래밍 기초",
    credit: 3,
    isFull: false,
};

console.log(course.title);
console.log(course.credit);

course.isFull = true;
course.room = "공학관 301";

console.log(course.isFull);
console.log(course.room);
console.log(course["code"]);

const key = "title";
console.log(course[key]);
console.log(course.key);

const courses = [
    { title: "자료구조", credit: 3 },
    { title: "데이터베이스", credit: 2 },
    { title: "웹 프로그래밍", credit: 3 },
];

for (let i = 0; i < courses.length; i++) {
    console.log(courses[i].title + 
        ": " + courses[i].credit + "학점");
}

function totalCredit(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total = total +list[i].credit;
    }
    return total;
}

console.log(totalCredit(courses));

const courseName = "자료구조" ;
const point = 3;

console.log(courseName + " (" + point + "학점)");
console.log(`${courseName} (${point}학점)`);
console.log(`합계: ${point + 2}학점`);

const code = " cs101 ";

console.log(code.trim());
console.log(code.trim().toUpperCase());
console.log("웹 프로그래밍".length);
console.log("웹 프로그래밍".includes("프로"));
console.log("데이터베이스".slice(0, 3));

const dayText = "월,수,금";
const dayList = dayText.split(",");

console.log(dayList.length);
console.log(dayList[1]);
console.log(dayList.join(" / "));

const input = "3";

console.log(input + 2);
console.log(Number(input) + 2);
console.log(Number("abc"));
console.log((10/3).toFixed(1));

const calcBtn = document.querySelector("#calc");
calcBtn.addEventListener("click", () => {
    const a = document.querySelector("#a").value;
    const b = document.querySelector("#b").value;
    console.log(typeof a);
    console.log(typeof Number(a));
    console.log(a + b);
    console.log(Number(a) + Number(b));
});