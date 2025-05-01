let given = "HeyBroIAM";

const word = given.toLowerCase();

const len = word.length;

console.log("The length of string : "+len)

let i=0;

let wordCompare= [];

let vowels =['a', 'e', 'i', 'o', 'u'];

for (const char of word) {
    wordCompare[i] = char;
    i++
}

let count =0;

for(let k=0;k<5;k++)
        {
            for(i=0;i<len;i++)
                    {
                        if(vowels[k]==wordCompare[i])
                                {
                                    count++;
                                }
                    }
        }

console.log("The Number of vowels in "+given+ " ==> "+count);