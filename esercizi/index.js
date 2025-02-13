
// create a function that generate all the prime numbers to a given N 
/* 
N = 3
output = [1, 3, 5]
 */

let body = document.getElementById("body")

let arr = []
function generatePrimeNumbers(num) {
    let number = 2
    while (arr.length < num) {
        let prime = true
        for (let divider = 2; divider <= Math.sqrt(number); divider++) {
            if (number % divider === 0) {
                prime = false
                break
            }
        }
        if (prime) {
            arr.push(number)
        }
        number++
    }
    return arr
}

console.log(generatePrimeNumbers(10))

function sumPrimeNumbers(arr) {
    let somma = 0
    for (let i = 0; i < arr.length; i++) {
        somma += arr[i]
    }
    return somma
}

console.log("sto stampando la somma:",sumPrimeNumbers(arr))

function changeColorBG() {
    if (sumPrimeNumbers(arr) >= 100) {
        body.style.background = "blue"
    }
}

changeColorBG()

const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    console.log("ciao")
})