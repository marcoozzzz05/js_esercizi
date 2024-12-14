let x = 5;
const pi = 3.14;
console.log(x);
console.log(pi);

let y = 10;
console.log(y);
y = 12;
console.log(y);

let number = 15;
{
    let number = 20;
    console.log(number);
}
console.log(number);

let outside = 7;
{
    let inside = 4;
    console.log(outside, inside);
}
//console.log(outside,inside);

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let n = 10
while (n >= 1) {
    if (n % 2 == 1) {
        console.log(n);
    }
    n--;
}

/*let word = prompt('Inserisci una parola');
console.log(word.length);

do {
    word = prompt('Inserisci una parola');
    console.log(word)
} while (word.length <= 5)
*/


let number1 = 7;
if (number1 > 5) {
    console.log("La variabile è maggiore di 5")
} else {
    console.log("La variabile è minore di 5")
}

let score = parseInt("88")
//if (score <= 100 && score >= 90) {
//console.log("Voto ottimo");
//} else if (score <= 89 && score >= 70) {
//console.log("Voto buono");
//} else if (score <= 69 && score >= 60) {
//console.log("Voto sufficiente");
//} else if (score <= 59) {
//console.log("Voto insufficiente");
//} else {
//console.log("Voto non valido");
//}

switch (true) {
    case score <= 100 && score >= 90:
        console.log("Voto ottimo");
        break;
    case score <= 89 && score >= 70:
        console.log("Voto buono");
        break;
    case score <= 69 && score >= 60:
        console.log("Voto sufficiente");
        break;
    case score <= 59:
        console.log("Voto insufficiente");
        break;
    default:
        console.log("Voto non valido");
}

let numeri = [15, 22, 53, 77, 37, 65];
console.log(numeri);

let somma = 0;
for (let z = 0; z < numeri.length; z++) {
    somma += numeri[z];
}
console.log(somma);

let array = [];
for (let r = numeri.length - 1; r >= 0; r--) {
    array.push(numeri[r]);
}
console.log(array)


/*const parole = [];
for(let v = 0; v < 5; v++) {
    const word1 = prompt("Inserisci una parola");
    parole.push(word1);
} 

for(let q = 0; q < parole.length; q++) {
    if (parole[q].length % 2 !== 0) {
        console.log(parole[q]);
    }
}*/

let person = {
    name: "Mario",
    age: 58,
    city: "Milano"
}
console.log(person);
console.log(person.age);
person.age = 57;
console.log(person.age);
person.job = "impiegato";
console.log(person.job)

for (chiave in person) {
    console.log(chiave + " " + person[chiave]);
}

function outerFunction(x, initialValue) {
    let result = initialValue;
    function innerFunction(y) {
        result = result + y;
        return result;
    }
    return innerFunction;
}

function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        }
    }
}

let student = {
    name: "Luca",
    age: 19,
    grade: "B",
    school: "Einstein"
}
console.log(Object.keys(student))
console.log(Object.values(student))

let chiaveValore = Object.entries(student)
console.log(chiaveValore);

for (chiaveValore in student) {
    console.log(chiaveValore + ": " + student[chiaveValore]);
}

let numbers = [1,2,3,4,5]
numbers.forEach(function(number) {
    console.log(number * 2)
})

let squaredNumbers = numbers.map(function(square) {
    return square ** 2
})
console.log(squaredNumbers)