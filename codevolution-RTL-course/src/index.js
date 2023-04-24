const getName = (fName, lName) => {
  return `${fName} ${lName}`;
};

const actualName = getName("felipe2", "calais");
const expected = "felipe calais";

if (actualName !== expected) {
  throw new Error(`${actualName} is not equal to ${expected}`);
} else {
  console.log("passed");
}
