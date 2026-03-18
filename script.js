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


let words = [];
for (let i = 0; i < 1000; i++) {
    let input = prompt("Введите команду:");

    if (input === "stop") {
        break;
    }
    if (input.startsWith("add, ")) {
        let word = input.slice(5);
        words.push(word);
        console.log(words);
    } 
    else if (input.startsWith("del, ")) {
        let word = input.slice(5); 
        let index = words.indexOf(word);
        if (index !== -1) {
            words.splice(index, 1);
        }
        console.log(words);
    } 
    else {
        console.log("unknown command");
    }
}
console.log(words); 