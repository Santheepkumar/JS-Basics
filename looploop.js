const avengers = ["Iron Man", "Hulk", "Thor", "Vision"];

// avengers.forEach((hero, index) => {
//   console.log(hero);
//   console.log(index);
//   console.log("looped");
// });

// const heros = avengers.map((hero, index) => {
//   return hero;
// });

// for (const hero of avengers) {
//   console.log(hero);
// }

const obj = {
  name: "Santheep",
  age: 22,
  gender: "Male",
};

for (const key in obj) {
  const value = obj[key];

  console.log(value);
}
