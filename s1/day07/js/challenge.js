const book = {
    title: "자바스크립트 입문",
    price: 25000,
    author: "김코딩",
};

const { title, price } = book;
console.log(title);
console.log(price);

const scores = [3, 7, 1];

const [a, b, c] = scores;
console.log(a + b + c);

function label ({ title, price }) {
    return `${title} - ${price}원`;
}

console.log(label(book));

const updated = { ...book, price: 20000 };

console.log(book.price);
console.log(updated.price);

const mon = ["사과", "배"];
const tue = ["귤"];

const all = [...mon, ...tue];

console.log(all.length);
console.log(all[all.length - 1]);

const text = JSON.stringify(book);
console.log(typeof text);

const back = JSON.parse(text);
console.log(back.author);

const memo = ["장보기", "운동"];

localStorage.setItem("memo", JSON.stringify(memo));

const savedMemo = JSON.parse(localStorage.getItem("memo"));
console.log(savedMemo.length);
console.log(savedMemo[0]);

const visitText = localStorage.getItem("visits");
const count = Number(visitText) + 1;
localStorage.setItem("visits",  count);
console.log(`도전 페이지 ${count}번째 방문`)

const books = [
    book,
    { title: "리액트 기초", price: 30000, author: "이리액" },
];

const titles =books.map(({ title }) => title).join(", ");
console.log(titles);

const addBook = (list, newBook) => [...list, newBook];

const newBooks = addBook(books, { title: "뷰 입문", price: 22000 });
console.log(books.length);
console.log(newBooks.length);

localStorage.setItem("books", JSON.stringify(books));

const savedBooks = JSON.parse(localStorage.getItem("books"));
const total = savedBooks.reduce((sum, { price  }) => sum + price, 0);
console.log(total);

const favBook = { ...book, fav: true };

console.log(book.fav);
console.log(favBook.fav);