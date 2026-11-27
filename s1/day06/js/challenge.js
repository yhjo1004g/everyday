const products = [
    { name: "노트북", price: 1200000, stock: 3 },
    { name: "마우스", price: 30000, stock: 0 },
    { name: "키보드", price: 80000, stock: 5 },
    { name: "모니터", price: 300000, stock: 0 },
    { name: "USB", price: 15000, stock: 12 },
];

products.forEach((product) => {
    console.log(`${product.name}: ${product.price} 원`);
});

const tecItem = products.map((product) => product.name);

console.log(tecItem.length);
console.log(tecItem[4]);

const productNames = products.filter((product) => product.stock === 0);

console.log(productNames.length);
console.log(productNames[0].name);

const db = products.find((product) => product.price === 80000);

console.log(db.name);

const total = products.reduce((sum, product) => sum + product.stock, 0)
console.log(total);

console.log(products.some((product) => product.price >= 1000000));
console.log(products.every((product) => product.price >= 0));

const openNames = products
    .filter(product => product.stock > 0)
    .reduce((sum, product) => sum + product.price * product.stock, 0);

console.log(`재고 금액: ${openNames}원`);

products.sort((a, b) => a.price - b.price);
console.log(products[0].name);
console.log(products[products.length - 1].name);


console.log(
    products
    .filter(p => p.Stock > 0)
    .map(p => p.name)
    .join(", ")
);

const mostExpensive = products.reduce(
    (max, p) => (p.price > max.price ? p : max),
    products[0]
);
console.log(mostExpensive.name);

console.log(tecItem.includes("마우스"));
console.log(tecItem.includes("태블릿"));

const raised = products.map(p => p.price + p.price / 10);

console.log(raised[0]);
console.log(raised.reduce((sum, v) => sum + v, 0));