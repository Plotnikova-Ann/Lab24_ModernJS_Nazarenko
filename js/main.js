// console.log("=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"];
// const color1 = colors[0];
// const color2 = colors [1];
// console.log(color1, color2);
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);
// const [primary, tertiary] = colors;
// console.log(primary, tertiary);
// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4); 
// console.log("Деструктуризация объектов");
// const user = {
// name: "Алиса",
// age: 25,
// city: "Москва",
// };
// const { name, age, city } = user;
// console.log(name, age, city);
// const { name: personName, country= "Россия" } = user;
// console.log(personName, country);
// console.log("Деструктуризация в параметрах");
// function printUser({ name, age, city }) {
// console.log(`Имя: ${name}`);
// console.log(`Возраст: ${age}`);
// console.log(`Город: ${city}`);
// }
// printUserOld(user);
// console.log();
// printUser (user);
// console.log("\n=== Практическое задание: Деструктуризация объекта product ===\n");
// const product = {
//     name: "Смартфон iPhone 15 Pro",
//     price: 99990,
//     category: "Электроника",
//     inStock: true
// };

// const { name, price, category, inStock } = product;

// console.log(" Информация о продукте (после деструктуризации):");
// console.log(`Название: ${name}`);
// console.log(`Цена: ${price} ₽`);
// console.log(`Категория: ${category}`);
// console.log(`В наличии: ${inStock ? "Да " : "Нет "}`);

// console.log("\n" + "=".repeat(50) + "\n");
// function printProduct({ name, price, category, inStock }) {
//     console.log(" ИНФОРМАЦИЯ О ТОВАРЕ");
//     console.log("━".repeat(30));
//     console.log(` Наименование: ${name}`);
//     console.log(` Цена: ${price.toLocaleString()} ₽`);
//     console.log(` Категория: ${category}`);
//     console.log(` Статус: ${inStock ? "В наличии" : "Нет в наличии"}`);
//     console.log("━".repeat(30));
// }

// printProduct(product);
// console.log("Spread для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, arr2];
// console.log("Объединённый массив:", combined);
// const copy = [...arr1];
// console.log("Копия массива:", сору);
// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:",
// extended);
// console.log("Spread для объектов");
// const person = {
//     name: "Иван",
//     age: 30,
// };
// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// };
// const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);
// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);
// const updated = { ...person, age: 31, occupation:
// "Developer" };
// console.log("Обновлённый объект:", updated);
// console.log("Rest оператор");
// function sum(...numbers) {
// return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));
// const numbers = [10, 20, 30, 40, 50];
// const [first, second,...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);
// import { greet, add, PI } from "./utils.js";
// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5 + 3 =", add(5, 3));
// console.log("Значение PI:", PI);
// import { multiply as умножить } from "./utils.js";
// console.log("4 * 7 =", умножить (4, 7));
// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение:", Utils.multiply(3, 9));
// export function square(x) {
//     return x * x;
// }
// export function cube(x) {
//     return x * x * x;
// }
// export const E = 2.718;
// import { square, cube, E } from './math.js';
// console.log("square(5) =", square(5));    
// console.log("cube(3) =", cube(3));         
// console.log("E =", E);          
// console.log("Промисы");
// const simplePromise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve("Операция выполнена успешно!");
//     } else {
//         reject("Произошла ошибка!");
//     }
// });
// simplePromise
// .then((result) => console.log("Результат:", result))
// .catch((error) => console.log("Ошибка:", error));
// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Прошло ${ms} миллисекунд`);
//         }, ms);
//     });
// }
// delay(1000)
// .then((message) => console.log(message));
// function fetchUserData (userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({
//                     id: userId,
//                     name: "Иван Иванов",
//                     email: "ivan@example.com",
//                 });
//             } else {
//                 reject("Неверный ID пользователя");
//             }
//         }, 1500);
//     });
// }
// fetchUserData(1)
// .then((user) => console.log("Пользователь:", user))
// .catch((error) => console.log("Ошибка:", error));
// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Шаг 1 завершён"), 500);
//     }); 
// }
// function step2 (previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 2
// завершён`), 500);
// });
// }
// function step3 (previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
//     });
// }
// step1()
// .then((result1) => step2(result1))
// .then((result2) => step3(result2))
// then((finalResult) => console.log("Финальный результат:", finalResult))
// .catch((error) => console.log("Ошибка в цепочке:", error));
// function checkInventory(productName, quantity) {
//     return new Promise((resolve, reject) => {
//         const inventory = { ноутбук: 10, наушники: 0 };
        
//         setTimeout(() => {
//             const available = inventory[productName.toLowerCase()];
            
//             if (available >= quantity) {
//                 resolve(` ${productName} в наличии (${available} шт.)`);
//             } else {
//                 reject(` ${productName} нет в нужном количестве`);
//             }
//         }, 500);
//     });
// }
// checkInventory("ноутбук", 2)
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err));

// checkInventory("наушники", 1)
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err));
// console.log("Async/Await");
// async function greet() {
// return "Привет!";
// }
// greet().then((message) => console.log(message));
// function getWeather() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ temp: 22, condition: "Солнечно" });
//         }, 1000);
//     });
// }
// async function showWeather() {
//     console.log("Загрузка погоды...");
//     const weather = await getWeather();
//     console.log(`Температура: ${weather.temp}°C, ${weather.
// condition}`);
// }
// showWeather();
// async function fetchData (shouldFail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldFail) {
//                 reject("Ошибка при загрузке данных");
//             } else {
//                 resolve({ data: "Важные данные" });
//             }
//         }, 800);
//     });
// }
// async function getData() {
//     try {
//         const result = await fetchData(false);
//         console.log("Успешно:", result.data);
//         const failedResult = await fetchData(true);
//         console.log("Это не выполнится");
//     } catch (error) {
//         console.log("Поймана ошибка:", error);
//     }
// }
// getData();
// async function cookDinner() {
//     console.log("Начинаем готовить...");
//     const pasta = await delay(1000).then(() => "Паста готова"); 
//     console.log(pasta);
//     const sauce = await delay(500).then(() => "Соус готов"); 
//     console.log(sauce);
//     const salad = await delay(700).then(() => "Салат готов"); 
//     console.log(salad);
//     return "Ужин готов!";
//     cookDinner().then((result) => console.log(result));
// }
// async function cookDinnerFast() {
//     console.log("Готовим всё одновременно...");
//     const [pasta, sauce, salad] = await Promise.all([
//         delay(1000).then(() => "Паста готова"),
//         delay(500).then(() => "Соус готов"),
//         delay(700).then(() => "Салат готов"),
// ]); 
// console.log(pasta, sauce, salad);
// return "Ужин готов быстрее!";
// }
// cookDinnerFast().then((result) => console.log(result));
// function checkStock() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(" Товар в наличии"), 500);
//     });
// }
// function calculatePrice() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(" Стоимость: 5000₽"), 500);
//     });
// }
// function confirmOrder() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(" Заказ подтверждён"), 500);
//     });
// }
// async function processOrder() {
//     try {
//         console.log(" Обработка заказа...");
//         const stock = await checkStock();
//         console.log(stock);
//         const price = await calculatePrice();
//         console.log(price);
//         const confirm = await confirmOrder();
//         console.log(confirm);
//         console.log("Заказ оформлен успешно!");
//     } catch (error) {
//         console.log(" Ошибка:", error);
//     }
// }
// processOrder();
// console.log("Fetch API");
// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok) {
//             throw new Error(`HTTP ошибка! Статус: ${response.status}`);
// }
// const users = await response.json();
// console.log("Первые 3 пользователя:");
// users.slice(0, 3).forEach((user) => {
// console.log(`- ${user.name} (${user.email})`);
// });
// } catch (error) {
// console.log("Ошибка при загрузке пользователей:", error.message);
// }
// }
// getUsers();
// async function getUserById(id) {
// try {
// const response = await fetch('https://jsonplaceholder.typicode.com/users/${id}');
// const user = await response.json();
// console.log(`Пользователь #${id}:`);
// console.log(`Имя: ${user.name}`);
// console.log(`Город: ${user.address.city}`);
// console.log(`Компания: ${user.company.name}`);
// } catch (error) {
// console.log("Ошибка:", error.message);
// }
// }
// getUserById(1);
// async function createPost() {
//     try {
//         const newPost = {
//             title: "Моя первая запись",
//             body: "Это содержание моей первой записи в блоге",
//             userId: 1,
//         };
        
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newPost),
//         });
        
//         const createdPost = await response.json();
//         console.log("Создана новая запись:");
//         console.log("ID:", createdPost.id);
//         console.log("Заголовок:", createdPost.title);
//     } catch (error) {
//         console.log("Ошибка при создании записи:", error.message);
//     }
// }
// createPost();
// console.log("Optional Chaining");
// const user1 = {
//   name: "Андрей",
//   address: {
//     city: "Волжский",
//     street: "Пушкина",
//   },
// };
// const user2 = {
//   name: "Дмитрий",
// };
// const city1 = user2.address && user2.address.city;
// console.log("Город (старый способ): ", city1);
// const city2 = user2.address?.city;
// console.log("Город (новый способ):", city2);
// const street = user1.address?.street;
// console.log("Улица:", street);
// const admin = {
//   name: "Администратор",
//   permissions: {
//     canDelete: () => true,
//   },
// };
// const guest = {
//   name: "Гость",
// };
// console.log("Админ может удалять?", admin.permissions?.canDelete?.());
// console.log("Гость может удалять?", guest.permissions?.canDelete?.());
// const company = {
//   name: "Tech Corp",
//   employees: [
//     { name: "Надежда", role: "Developer" },
//     { name: "Анна", role: "Designer" },
//   ],
// };
// const startup = {
//   name: "New Startup",
// };
// console.log("Первый сотрудник:", company.employees?.[0]?.name);
// console.log("Первый сотрудник стартапа:", startup.employees?.[0]?.name);
// console.log("Nullish Coalescing");
// const value1 = 0;
// const value2 = "";
// const value3 = false;
// const value4 = null;
// const value5 = undefined;
// console.log('value1 || "default":', value1 || "default");
// console.log('value2 || "default":', value2 || "default");
// console.log('value3 || "default":', value3 || "default");
// console.log('value1 ?? "default":', value1 ?? "default");
// console.log('value2 ?? "default":', value2 ?? "default");
// console.log('value3 ?? "default":', value3 ?? "default");
// console.log('value4 ?? "default":', value4 ?? "default");
// console.log('value5 ?? "default":', value5 ?? "default");
// function displayUserSettings(settings) {
//   const theme = settings?.theme ?? "light";
//   const fontSize = settings?.fontSize ?? 14;
//   const notifications = settings?.notifications ?? true;
//   console.log("Настройки пользователя:");
//   console.log("Тема:", theme);
//   console.log("Размер шрифта:", fontSize);
//   console.log("Уведомления:", notifications);
// }
// displayUserSettings({ theme: "dark", fontSize: 16 });
// displayUserSettings({ notifications: false });
// displayUserSettings({});
// const apiResponse = {
//     data: {
//     user: {
//     profile: {
//     settings: {
//     language: "ru",
//     },
//     },
//     },
//     },
// };
// const language = apiResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык:", language);
// const emptyResponse = {};
// const defaultLanguage = emptyResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык по умолчанию:", defaultLanguage);
// const order = {
//     customer: {
//         name: "Анна Смирнова",
//         email: "anna@example.com"
//     },
//     shipping: {
//         address: "ул. Ленина, д. 10",
//         city: "Москва"
//     },
//     payment: {
//         method: "Банковская карта",
//         status: "Оплачен"
//     }
// };
// function displayOrder(orderData) {
//     const customerName = orderData?.customer?.name ?? "Не указано";
//     const email = orderData?.customer?.email ?? "Не указан";
//     const address = orderData?.shipping?.address ?? "Не указан";
//     const city = orderData?.shipping?.city ?? "Не указан";
//     const paymentMethod = orderData?.payment?.method ?? "Не указан";
//     const paymentStatus = orderData?.payment?.status ?? "Не известен";
    
//     console.log(" ИНФОРМАЦИЯ О ЗАКАЗЕ:");
//     console.log(` Клиент: ${customerName} (${email})`);
//     console.log(` Адрес: ${city}, ${address}`);
//     console.log(` Оплата: ${paymentMethod} - ${paymentStatus}`);
// }
// displayOrder(order);
// displayOrder({});
