/*
Read file input
Split() by newline
currSum used to get the sum of the calories that an elf is holding
currMax is overwritten whenever an elf carrying more calories is found
*/
const input = await Deno.readTextFile("./input.txt")
const inputResult = input.split(/\r?\n/);

let currMax = 0
let currSum = 0;
for (let i = 0; i < inputResult.length; i++) {
    if (inputResult[i] === "") {
        if (currSum >= currMax) {
            currMax = currSum;
        }
        currSum = 0;
    } else {
        currSum = currSum + Number(inputResult[i]);
    }
}

console.log(currMax)
