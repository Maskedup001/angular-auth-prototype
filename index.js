// Первый урок 
// Массив товаров 
const products = [
    { name: "Телефон", price: 500, inStock: true },
    { name: "Ноутбук", price: 1000, inStock: false },
    { name: "Наушники", price: 100, inStock: true },
    { name: "Мышь", price: 50, inStock: true },
    { name: "Клавиатура", price: 80, inStock: false },
];
//Только товары в наличии(на складе)
const A_Products = products.filter(product => product.inStock);
// Массив цен этих товаров.
const A_Prices = A_Products.map(product => product.price);
// Общая сумма товаров в наличии
let total = 0;
for (let i = 0; i < A_Products.length; i++) {
    total += A_Products[i].price;
}
// Сортировка товаров в наличии по цене (от дешёвых к дорогим)
const Sorted_Products = [...A_Products].sort((a, b) => a.price - b.price);
// Вывод
console.log("Товары в наличии:", A_Products);
console.log("Цены товаров в наличии:", A_Prices);
console.log("Общая сумма:", total);
console.log("Отсортированные товары:", Sorted_Products);
