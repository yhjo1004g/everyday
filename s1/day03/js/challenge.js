function printLine() {
    console.log("----------");
}

printLine();
printLine();

function welcome(name, major) {
    console.log (name + "님" + " (" + major + ") 환영합니다");
}

welcome("홍길동", "컴퓨터공학과");

function multiply(a, b) {
    return a * b;
}

const result = multiply(4, 5);
console.log(result);
console.log(multiply(2, 3)* 4);

function average(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total = total + scores[i];
    }
    return total/scores.length;
}

console.log(average([80, 90, 100]));
console.log(average([70, 85]));

function grade(score) {
    if (score >= 90) {
    return "A"
    }
    else if (score >= 80) {
    return "B";
    }
    else {
    return "C";
    }
}

console.log(grade(95));
console.log(grade(85));
console.log(grade(70));

console.log(grade(average([88, 92, 79])));

function countPass(scores) {
    let count = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 60) {
            count = count + 1;
        }
    }
    return count;
}
console.log(countPass([55, 60, 72, 40, 90]));