const getNumber = 1234;
let Number = getNumber;
let sum = 0;
let digit;

while(Number!=0) {
    digit = parseInt(Number%10);
    sum = sum + digit;
    Number = parseInt(Number/10);
}

console.log("The sum of digit in "+getNumber+" is : "+sum);