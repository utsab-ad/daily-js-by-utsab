let nameOf = "utsab";
const len = nameOf.length;
console.log("The length of " + nameOf + " is: " + len);

let word = [];
let i = 0;

for (const char of nameOf) {
  word[len-i-1] = char;
  i++;
}

let revword = word.join('');
let revNotword = word.join();


console.log(revword);

console.log(revNotword);


