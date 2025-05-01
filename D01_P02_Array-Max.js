// Program to Find the Maximum among the array 

let array = [1, 3, 9, 7, 10];

const len = array.length;
let max = array[0];
for(let i=0;i<len;i++)
        {
            if(array[i]>max)
                    {
                        max = array[i];
                    }
        }
console.log("The maximum among the array is: "+max);