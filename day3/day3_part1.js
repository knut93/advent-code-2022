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
for (let i = 0; i < inputResult.length; i++) {
    const arr1 = [...inputResult[i].substring(0,inputResult[i].length/2)]
    const arr2 = [...inputResult[i].substring(inputResult[i].length/2, inputResult[i].length)]

    let intersection = arr1.filter(x => arr2.includes(x));
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