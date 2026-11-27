const course = {
    title: "자료구조",
    credit: 3,
    day: "월",
};

const { title, credit } = course;
console.log(title);
console.log(credit);

const scores = [90, 80, 70];

const [first, second] = scores;
console.log(first);
console.log(second);

function describe({ title, credit }) {
  return `${title}: ${credit}학점`;
}
 
console.log(describe(course));

const mon = ["자료구조", "글쓰기"];
const tue = ["데이터베이스"];
 
const all = [...mon, ...tue];
const copied = [...mon];
copied.push("운영체제");
 
console.log(all.length);
console.log(mon.length);
console.log(copied.length);

const updated = { ...course, credit: 2 };
 
console.log(course.credit);
console.log(updated.credit);
console.log(updated.title);

const text = JSON.stringify(course);
console.log(text);
console.log(typeof text);
 
const back = JSON.parse(text);
console.log(back.title);

localStorage.setItem("studentName", "홍길동");
console.log(localStorage.getItem("studentName"));
 
localStorage.removeItem("studentName");
console.log(localStorage.getItem("studentName"));

const cart = [
  { title: "자료구조", credit: 3 },
  { title: "글쓰기", credit: 2 },
];
localStorage.setItem("cart", JSON.stringify(cart));
 
const saved = JSON.parse(localStorage.getItem("cart"));
console.log(saved.length);
console.log(saved[1].title);

const visitText = localStorage.getItem("visits");
const count = Number(visitText) + 1;
localStorage.setItem("visits", count);
console.log(`${count}번째 방문`);