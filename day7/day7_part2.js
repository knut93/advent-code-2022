const input = await Deno.readTextFile("./input.txt")
const inputResult = input.split(/\r?\n/);

let tree = {};
let path = [];

for (let i = 0; i < inputResult.length; i++) {
    const command = inputResult[i].split(" ")
    if (command[1] === 'cd') {
        if (command[2] === '..') {
            path.pop()
        }
        else {
            path.push(command[2])
            if(tree[command[2]] === undefined) { tree[command[2]] = 0; }
        }
    } else if (command[1] === 'ls') {
        continue;
    } else if (command[0] === 'dir') {
        continue;
    } else {
        const size = Number(command[0]);
        for (let i = 0; i < path.length; i++) {
            const temp = tree[path[i]]
            tree[path[i]] = temp + size;
        }
    }
}

console.log(tree)
console.log(path)
let sizeCount = 0;
for (const property in tree) {
    console.log(`${property} ${tree[property]}`)
    if(Number(tree[property]) <= 100000) {
        sizeCount += Number(tree[property])
    }
}
console.log(sizeCount)