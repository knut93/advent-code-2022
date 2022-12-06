/*
            [Q]     [G]     [M]    
            [B] [S] [V]     [P] [R]
    [T]     [C] [F] [L]     [V] [N]
[Q] [P]     [H] [N] [S]     [W] [C]
[F] [G] [B] [J] [B] [N]     [Z] [L]
[L] [Q] [Q] [Z] [M] [Q] [F] [G] [D]
[S] [Z] [M] [G] [H] [C] [C] [H] [Z]
[R] [N] [S] [T] [P] [P] [W] [Q] [G]
 1   2   3   4   5   6   7   8   9 
*/

const input = await Deno.readTextFile("./input.txt")
const inputResult = input.split(/\r?\n/);

let cargo = [
    ['R', 'S', 'L', 'F', 'Q'],
    ['N', 'Z', 'Q', 'G', 'P', 'T'],
    ['S', 'M', 'Q', 'B'],
    ['T', 'G', 'Z', 'J', 'H', 'C', 'B', 'Q'],
    ['P', 'H', 'M', 'B', 'N', 'F', 'S'],
    ['P', 'C', 'Q', 'N', 'S', 'L', 'V', 'G'],
    ['W', 'C', 'F'],
    ['Q', 'H', 'G', 'Z', 'W', 'V', 'P', 'M'],
    ['G', 'Z', 'D', 'L', 'C', 'N', 'R'],
];

for (let i = 0; i < inputResult.length; i++) {
    const instructions = inputResult[i].split(" ");
    // How many we will take
    const numToTake = Number(instructions[1]);
    // Taking from this array
    const initialPosition = Number(instructions[3]);
    // Place into this array
    const finalPosition = Number(instructions[5]);
    // Part 2 of the challenge. 
    // We want to be able to "save" the order of crates
    // when taking two or more at a time.
    if (numToTake > 1) {
        // Variable to preserve the order of the crates
        let tempCargo = [];
        for (let j = 0; j < numToTake; j++) {
            tempCargo.unshift(cargo[initialPosition-1].pop())
        }
        // Need to store the length of the crates for next loop
        const tempCargoSize = tempCargo.length;
        for (let k = 0; k < tempCargoSize; k++) {
            // Take from first index (shift) of tempCargo
            // Place into the last index (push) of cargo
            cargo[finalPosition-1].push(tempCargo.shift())
        }
    } else {
        // Base case for only one crate taken
        const itemToAdd = cargo[initialPosition-1].pop()
        cargo[finalPosition-1].push(itemToAdd)
    }
}; 
let finalSequence = "";
for (let i = 0; i < cargo.length; i++) {
    finalSequence += cargo[i].pop()
};
// Per requirements, print out only the top crate of each stack
console.log(finalSequence);