let firstArray = ["John", "Jason", "Kevin"];

firstArray.unshift("Jad");

let secondArray = ["Manel", "Nahla", "Sabine", "Mirna"];

let thirdArray = firstArray.concat(secondArray);

console.log(thirdArray.toString());

console.log("Jads index is " + thirdArray.indexOf("Jad"));

console.log(thirdArray.length);

thirdArray.pop();
thirdArray.shift();
thirdArray.push("Mustapha");
thirdArray.reverse();

console.log("After reverse: " + thirdArray.toString());

//3 is not included, online 0, 1,2
let fourthArray = thirdArray.slice(0, 3);

console.log(fourthArray.toString());

console.log(fourthArray.includes("Sabine"));

thirdArray.forEach((value, index) => {
  console.log(value + " " + index);
});
