const input = await Deno.readTextFile("./input.txt")
const inputResult = input.split(/\r?\n/);

class TreeNode {
    constructor(name) {
        this.value = null;
        this.name = name;
        this.children = [];
        this.parent = null;
        this.type = null;
        this.count = 0;
    }
    calculateSize(node) {
        for (const element of node.children) {
            if((element.value && Number(element.value) <= 100000)) {
                this.count += Number(element.value);
            } 
            if (Number(this.calculateSize(element)) <= 100000) {
                element.count += Number(element.calculateSize(element))
            }
            if (this.parent != null) {
                this.count += Number(element.value);
            }
            
        }
        if(node.name === '/') {
            console.log(this.count)
        }
    }
}

const root = new TreeNode("/");
let currentNode = root;

for (let i = 1; i < inputResult.length; i++) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    if (inputResult[i].split(" ")[1] === "cd" && inputResult[i].split(" ")[2] === "..") {
        currentNode = currentNode.parent;
    } else if (inputResult[i].split(" ")[1] === "cd") {
        const newNode = new TreeNode(inputResult[i].split(" ")[2]);
        newNode["type"] = "dir";
        currentNode.children.push(newNode);
        newNode["parent"] = currentNode;
        currentNode = newNode;
    } else if (inputResult[i].split(" ")[0] != "dir" && inputResult[i].split(" ")[0] != "$") {
        const newNode = new TreeNode(inputResult[i].split(" ")[1]);
        newNode["value"] = inputResult[i].split(" ")[0]
        currentNode.children.push(newNode);
    }
}
root.calculateSize(root)