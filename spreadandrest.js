const obj = {
  name: "santheep",
  age: 22,
  address: {
    city: "Coimbatore",
    state: "TN",
  },
};

const anotherObj = {
  education: "BE",
  interest: "programming",
  ...obj,
};

console.log(anotherObj);

// const { name, age, address, ...restvalues } = obj;

// const arr = ["china", "india", "US"];

// const [one, ...restArray] = arr;

// console.log(one);
// console.log(restArray);
