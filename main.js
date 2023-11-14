// for 
// while
// do while

// 1.
// while
// let a = 0;

// while (a < 10) {
//     console.log("salom");
//    a++;
// }

// 2.
// let i = 100;

// while (i > 0 ) {
// console.log(i);
//     i--;
// }

// 3.
// for
// for(let a = 0; a < 100; a++) {
//     console.log(a);
// }

// 4.
// for(let n = 100; n > 0; n--) {
//     console.log(n);
// }

// 5.
// for (let m = 1; m <= 10; m++) {
//     if (m % 2 != 0) {
//         console.log(m);
//     }
// }

// 6. 
// let i = 0;
// do {
//   console.log( i );
//   i++;
// } while (i < 100);

// 7.
// let i = 100;
// do {
//   console.log( i );
//   i--;
// } while (i > 0);

// 8.
// for (let b = 1; b <= 10; b++) {
//     console.log(b);
//     if (b == 7) {
//         break;
//     }
// }

// 9.
// for (let b = 1; b <= 10; b++) {
//     if (b == 7) {
//         continue;
//     }
//     console.log(b);
// }

// 10.
// let i = 3;

// while (i) {
//   alert( i-- );
// }

// 11.
// for (let i = 0; i < 3; i++) {
//     alert('number ${i}!');
// }

// 12.
// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

// 13.
// let num;

// do {
//   num = prompt(" a number greater than 100?", 0);
// } while (num <= 100 && num);

// 14.
// let number;
// do{
//     number = prompt("enter a number");
// } while (number != null && number != 100);

// 15.
// let k = 5;
// let n = 10;

// 'k(5) sonini n(10) marta chiqaruvchi cod yozing';

// for (let i = 0; i < n; i++) {
//     console.log(k);
// }

// 16.
// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let res = 0;
// if (a < b) {
//   for (let i = a; i <= b; i++) {
//     console.log(i);
//     res++;
//   }
// } else {
//   alert("a soni b sonidan kichik bo'lsin!");
// }

// console.log("Chaqirilgan sonlar soni: ${res}");

// 17.
// let c = +prompt("c sonini kiriting");
// let d = +prompt("d sonini kiriting");
// let res = 0;
// for (let i = b - 1; i > a; i--) {
//   console.log(i);
//   res++;
// }

// console.log("Chaqirilgan sonlar soni: ${res}");

// 18.
// let konfet = +prompt("konfet narxini kiriting");

// for (let i = 1; i <= 10; i++) {
//   console.log("${i}kg konfet=${i * konfet}so'm");
// }

// 19.
// let narx = 22780;

// for (let i = 1.2; i <= 2; i+=0.1) { 
//     let kg = +i.toFixed(1)
//     console.log("${kg}kg = ${Math.round(narx * kg)}so'm");
// }

// 20.
// let a = 1;
// let b = 8;
// let counter = 0;

// for (let i = a; i <= b; i++) {
//   counter += i;
// }

// console.log("Yig'indi: ", counter);

// 21.
// let a = 1;
// let b = 8;
// let counter = 1;

// for (let i = a; i <= b; i++) {
//   counter *= i;
// }

// console.log("Ko'paytma: ", counter);

// 22.
// let a = 1;
// let b = 8;
// let counter = 1;

// for (let i = a; i <= b; i++) {
//   counter += i ** 2;
// }

// console.log("Ko'paytma: ", counter);