/*
Read file input
Split() by newline
currSum used to get the sum of the calories that an elf is holding
Store currSum in result
Sort result by value and obtain top three elves
*/
const input = await Deno.readTextFile("./input.txt")
const inputResult = input.split(/\r?\n/);

const result =[];
let currSum = 0;
for (let i = 0; i < inputResult.length; i++) {
    if (inputResult[i] === "") {
        result.push(currSum);

        currSum = 0;
    } else {
        currSum = currSum + Number(inputResult[i]);
    }
}
result.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
})
const partTwoAnswer = result[0] + result[1] + result[2]
console.log(partTwoAnswer)