const toWon = (n) => n + "원";

console.log(toWon(1500));

const discount = (price,percent) => 
    price - price * percent / 100;

console.log(discount(10000, 10));

const shipping = 3000;

function withShipping(price) {
    return shipping + price;
}

console.log(withShipping(9000));

const isFree = (price) => {
    return price >= 50000;
};

console.log(isFree(30000));
console.log(isFree(50000));

function finalPrice(price) {
    const salePrice = discount(price, 10);

    if(isFree(salePrice)) {
        return salePrice; 
    } else {
        return withShipping(salePrice);
    }
}

console.log(finalPrice(20000));
console.log(finalPrice(60000));

const myPrices = [12000, 8000, 30000];

const sumPrices = (prices) => {
    return prices.reduce((sum, price) => sum + price, 0);
};

console.log(sumPrices(myPrices));

const formatOrder = (prices) => {
    return prices.length + "개 / " + toWon(sumPrices(prices));
};

console.log(formatOrder(myPrices));