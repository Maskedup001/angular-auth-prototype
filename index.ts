// Первый урок 1
// console.log(1)


// Второй урок 2

// const age: number = 35;

// if (age < 18) {
// console.log('Доступ запрещён');
// } 
// else {
//     console.log(`Таблица умножения на ${age}:`);
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${age} × ${i} = ${age * i}`);
//     }
// }


// Третий урок 3

// Функция возвращает число или строку (тип number или string)
function calculate2(a: number, b: number, operator: string): number | string {
	if (operator === "+") return a + b;
	if (operator === "-") return a - b;
	if (operator === "*") return a * b;
	if (operator === "/") return a / b;
	// Если оператор не распознан, возвращается строка с ошибкой
	return "Ошибка: неизвестный оператор"
}

//Вывод  
console.log("Результат:", calculate2(10, 5, "+"));
console.log("Результат:", calculate2(10, 5, "-"));
console.log("Результат:", calculate2(10, 5, "*"));
console.log("Результат:", calculate2(10, 5, "/"));
// Пример, если оператор не распознан (выведет строку с ошибкой)
console.log("Результат:", calculate2(10, 5, "$wd"));