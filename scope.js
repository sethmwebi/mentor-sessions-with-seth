// let age = 25;
//
// function addNumbers(x, y) {
//   console.log(age);
// }
//
// addNumbers();
let message = "world";

function display_scopes() {
  let message = "local";

  if (true) {
    let message = "block level";
    console.log(message);
  }

  console.log(message);
}

display_scopes();
