const input = await Deno.readTextFile("./input.txt")

let array = []
for (let i = 0; i < 4; i++) {
    array.push(input[i])
}

let count = 4;
for (let i = 4; i < input.length; i++) {
    if (new Set(array).size != array.length) {
        count++;
        array.shift();
        array.push(input[i]);
    } else {
        break;
    }
}

console.log(count)