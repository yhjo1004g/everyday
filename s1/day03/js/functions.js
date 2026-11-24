function sayHello() {
  console.log("안녕하세요");
}
 
sayHello();
sayHello();

function greet(name) {
  console.log(name + "님, 환영합니다");
}
 
greet("홍길동");
greet("김철수");

function printCourse(title, credit) {
  console.log(title + " (" + credit + "학점)");
}
 
printCourse("자료구조", 3);
printCourse("데이터베이스", 2);

function add(a, b) {
  return a + b;
}
 
const result = add(3, 2);
console.log(result);
console.log(add(10, 5))

function printSum(a, b) {
  console.log(a + b);
}
function getSum(a, b) {
  return a + b;
}
 
const x = printSum(1, 2);
const y = getSum(1, 2);
console.log(x);
console.log(y);

function sumCredits(credits) {
  let total = 0;
  for (let i = 0; i < credits.length; i++) {
    total = total + credits[i];
  }
  return total;
}
 
console.log(sumCredits([3, 3, 2]));
console.log(sumCredits([3, 3, 2, 3, 3, 2, 3]));
 
const myCredits = [3, 3, 2];
console.log(sumCredits(myCredits));

function checkCredit(total) {
  if (total > 18) {
    return "학점 초과";
  }
  return "신청 가능";
}
 
console.log(checkCredit(sumCredits([3, 3, 2])));
console.log(checkCredit(19));

function showTotal() {
  console.log("합계: " + sumCredits([3, 3, 2]));
}
 
const btn = document.querySelector("#btn");
btn.addEventListener("click", showTotal());