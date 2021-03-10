const condition = 3 > 2;
const conditionTwo = 1 === 1;

// if (condtion) {
//   console.log("done");
// } else if (1 === 2) {
//   console.log("else if executed");
// } else if {
//   console.log("this is else if");
// }

const result = condition
  ? "done"
  : conditionTwo
  ? "else if executed"
  : "this is elseif";

// const result = condition && "Hello";

console.log(result);
