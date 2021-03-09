const obj = {
  name: "santheep",
  age: 22,
  //   address: {
  //     city: "Coimbatore",
  //     state: "TN",
  //   },
};

const { address = 10 } = obj;

console.log(address);

// const { state, city } = address;

// console.log(name, age);
// console.log(state);

const arr = ["china", "india", "US"];

const [one, two] = arr;

// console.log(one);
// console.log(one);

const arrOfObj = [
  {
    name: "santheep",
    age: 22,
    address: {
      city: "Coimbatore",
      state: "TN",
    },
  },
  {
    name: "honey",
    age: 22,
    address: {
      city: "london",
      state: "TN",
    },
  },
];

// const [{ name, age }, send] = arrOfObj;

// console.log(name);
// console.log(age);
// console.log(send);
