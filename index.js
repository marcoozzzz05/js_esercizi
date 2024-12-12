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
    console.log(outside,inside);
}
//console.log(outside,inside);

for(let i = 0; i <= 20; i++) {
    if(i % 2 == 0) {
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

//let word = prompt('Inserisci una parola');
//console.log(word.length);

let number1 = 7;
if (number1 > 5) {
    console.log("La variabile è maggiore di 5")
} else {
    console.log("La variabile è minore di 5")
}

let score = parseInt("48")
if (score <= 100 && score >= 90) {
    console.log("Voto ottimo");
} else if (score <= 89 && score >= 70) {
    console.log("Voto buono");
} else if (score <= 69 && score >= 60) {
    console.log("Voto sufficiente");
} else if (score <= 59) {
    console.log("Voto insufficiente");
} else {
    console.log("Voto non valido")
}