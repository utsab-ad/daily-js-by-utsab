let noOf = 50;

const print = (word) => {
    console.log(word);
}

const cond = (m, n) => {

return m%n === 0;

}


// for (let i = 1; i <= noOf; i++) {
//     if (cond(i, 3) && cond(i, 5)) {
//         print("FizzBuzz");
//     } else if (cond(i, 3)) {
//         print("Fizz");
//     } else if (cond(i, 5)) {
//         print("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// it can be also done with conditional: 

for(let i=1;i<=noOf;i++)
        {
            (cond(i, 3) && cond(i, 5) ? print("FizzBuzz") : (cond(i, 3) ? print("Fizz") : (cond(i, 5)) ? print("Buzz"): console.log(i)));
        }