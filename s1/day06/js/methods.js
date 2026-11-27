const courses = [
  { title: "자료구조", credit: 3, full: true },
  { title: "데이터베이스", credit: 2, full: false },
  { title: "웹 프로그래밍", credit: 3, full: false },
  { title: "운영체제", credit: 3, full: true },
  { title: "글쓰기", credit: 2, full: false },
];
console.log(courses.length);

courses.forEach((c) => {
    console.log(c.title + " " + c.credit);
});

const names = courses.map((course) => course.title);
const labels = courses.map((c) => `${c.title} (${c.credit})`);

console.log(names.length);
console.log(names[0]);
console.log(labels[1]);

const openCourses = courses.filter((c) => !c.full);
const threeCredit = courses.filter((c) => c.credit === 3);

console.log(openCourses.length);
console.log(openCourses[0].title);
console.log(threeCredit.length);

const db = courses.find((c) => c.title === "데이터베이스");
const none = courses.find((c) => c.credit === 4);

console.log(db.credit);
console.log(none);

const total = courses.reduce((sum, c) => sum + c.credit, 0);
console.log(total);

console.log(courses.some((c) => c.full));
console.log(courses.every((c) => c.credit >= 2));
console.log(names.includes("운영체제"));
console.log(names.includes("미적분"));

const nums = [3, 10, 1, 2];
 
nums.sort();
console.log(nums.join(", "));
nums.sort((a, b) => a - b);
console.log(nums.join(", "));
nums.sort((a, b) => b - a);
console.log(nums.join(", "));

const openNames = courses
  .filter((c) => !c.full)
  .map((c) => c.title);
const openTotal = courses
  .filter((c) => !c.full)
  .reduce((sum, c) => sum + c.credit, 0);
 
console.log(openNames.length);
console.log(openTotal);