/*
    Read file input
    Split() by newline
    Define getNumFromLetter() to value lowercase and uppercase letters 
    a - z => 1 - 26 and A - Z => 27 - 62
    Duplicates array will hold the common elements between the 3 lines of input (strings)
    Iterate  through three lines of input at once and iterate by 3 (i+=3)  and use filter() to find the common element
    The resulting array will have duplicates. Convert to Set object to remove duplicates, then push the element back to duplicates array.
    Iterate through duplicates with getNumFromLetter().
*/

const input = await Deno.readTextFile("./input.txt")
const inputResult = input.split(/\r?\n/);

const getNumFromLetter = (letter) => {
    if (letter === letter.toLowerCase()) {
        return (letter.charCodeAt(0)-96)
    } else {
        return (letter.charCodeAt(0)-38)
    }
}

let duplicates = [];
for (let i = 0; i < inputResult.length; i+=3) {
    
    const arr1 = [...inputResult[i]]
    const arr2 = [...inputResult[(i+1)]]
    const arr3 = [...inputResult[(i+2)]]

    let intersection = arr1.filter(x => (arr2.includes(x) && arr3.includes(x)));
    const removeDupe = new Set(intersection)
    for (let item of removeDupe) {
        duplicates.push(item);
    }
}

let duplicatesSum = 0;
for (let i = 0; i < duplicates.length; i++) {
    duplicatesSum = duplicatesSum + getNumFromLetter(duplicates[i]);
}
console.log(duplicatesSum)
