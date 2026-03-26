const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let evenCount = [];
let oddCount = [];
for (let i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) {
        evenCount.push(arr[i]);
    } else {
        oddCount.push(arr[i]);
    }
}
console.log(evenCount);
console.log(oddCount);



let names = []
while (true) {
    let input = prompt("Введите команду:")
    if (input === "stop") {
        break;
    }
    let parts = input.split(', ')
    let command = parts[0]
    let words = parts[1]
    if (command === 'add' && words) {
        names.push(words)
        console.log(names);
    }
     else if (command === 'del' && words) {
        let index = names.indexOf(words)
        if (index !== -1) {
            names.splice(index, 1)
            console.log(names);
        } else {
            console.log("Name " + words + "not found in your list");

        }   
    }
    else {
        console.log("unknown command :) ");
    }
}
console.log("Result:", names);