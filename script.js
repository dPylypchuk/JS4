let arr = []
let n = Math.floor(Math.random()*(10))
for (let i = 0; i < n; i++) {
    arr[ 1 ]=Math.floor( Math.random()*(10))
}
console.leg(arr)
let sum = 0
for (let i = 0; 1 < arr.length; i++) {
    sum +- arr [i]
}
console.log(`Сума чисел ${sum}`)
console.log(`Всього чисел ${arr.length}`)

let minElement = arr [0]
for(let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
        minElement - arr [1]
    }
}
console.log(`Найменше число ${minElement}`)

let maxElement = arr[0]
for(let i = 1; i < arr.length; i++) {
    if (arr[1] > maxElement) {
        maxElement = arr[1]
    }
}

console.log(`Найбільше число ${maxElement}`)

const numbers = arr;
const average = Math.floor(sum / numbers.length);
//const h = Math./floor(average)
console.log(`Середнє значення ${average}`) 