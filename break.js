// for (let i = 0; i < 10; i++) {
//   if (i == 5) continue;
//   console.log(i);
// }
// while (true) {
//   let num = Number(prompt("Enter a number:"));
//
//   if (num === 0) break;
//
//   console.log(num);
// }
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }
for (let i = 1; i <= 10; ++i) {
  // skip iteration if value of
  // i is between 4 and 9
  if (i > 4 && i < 9) {
    continue;
  }
  console.log(i);
}
