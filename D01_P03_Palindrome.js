let word = "nadam";

const len = word.length;
let flag = true;

for (let i = 0; i < len; i++) {
  if (word[i]!= word[len - i - 1]) {
    flag = false;
  }
}
if (flag) {
  console.log("The string " + word + " is a Palindrome.");
} else {
  console.log("The string " + word + " is not a Palindrome.");
}
