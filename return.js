const multy = (one, two) => {
  const ans = one * two;
  return ans;
};

const multy2 = (one, two) => one * two;

const result = multy(100, 2);
multy2(100, 2);

console.log(result);
console.log(multy2(100, 2));
