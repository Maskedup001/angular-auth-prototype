// Первый урок 1
// console.log(1)

// Второй урок 2
const age: number = 35;

if (age < 18) {
console.log('Доступ запрещён');
} 
else {
    console.log(`Таблица умножения на ${age}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${age} × ${i} = ${age * i}`);
    }
}