// function counter(count) {
//   console.log(count);
//   if (count < 20) {
//     count += 1;
//     counter(count);
//   } else {
//     return;
//   }
// }
//
// counter(1);
//
function factorial(num) {
  // base case
  if (num > 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
}

console.log(factorial(5));
