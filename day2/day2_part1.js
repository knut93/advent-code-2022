/*
Read file input
Split() by newline
Define a function to determine results from Rock-Paper-Scissors
Converts A B C / X Y Z to numbers with the 2-D array to return value
*/

const input = await Deno.readTextFile("./input.txt")
const inputResult = input.split(/\r?\n/);

const getScore = (string) => {
    const a = string.substring(0,1);
    const b = string.substring(2,3);
    /*
        A X Rock 1
        B Y Paper 2
        C Z Scissors 3
    */
    let one = 0;
    let two = 0;

    switch (a) {
        case 'A':
            one = 0;
            break;
        case 'B':
            one = 1;
            break;
        default:
            one = 2;
    }
    switch (b) {
        case 'X':
            two = 0;
            break;
        case 'Y':
            two = 1;
            break;
        default:
            two = 2;
    }

    const resultMatrix = 
    [
        [4,8,3],
        [1,5,9],
        [7,2,6]
    ]
    return resultMatrix[one][two]
}


console.log(inputResult.reduce(
    (accumulator, currentValue) => {return accumulator + Number(getScore(currentValue));}, 0));