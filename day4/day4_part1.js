const input = await Deno.readTextFile("./input.txt")
const inputResult = input.split(/\r?\n/);

let perfectPairSum = 0;

for (let i = 0; i < inputResult.length; i++) {
    const dividePair = inputResult[i].split(",")
    const one = dividePair[0];
    const two = dividePair[1];
    const firstPair = one.split("-");
    const secondPair = two.split("-");

    const oneLower = Number(firstPair[0])
    const oneUpper = Number(firstPair[1])
    const twoLower = Number(secondPair[0])
    const twoUpper = Number(secondPair[1])

    if ((oneLower >= twoLower) && (oneUpper <= twoUpper)) {
        perfectPairSum += 1;
    } else if ((twoLower >= oneLower) && (twoUpper <= oneUpper)) {
        perfectPairSum+= 1;      
    }
}
console.log(perfectPairSum);