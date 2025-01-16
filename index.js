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

let numbers = [1, 2, 3, 4, 5]
numbers.forEach(function (number) {
    console.log(number * 2)
})

let squaredNumbers = numbers.map(function (square) {
    return square ** 2
})
console.log(squaredNumbers)

let students = [
    {
        name: "Davide",
        grade: 75
    },
    {
        name: "Carlo",
        grade: 63
    },
    {
        name: "Stefano",
        grade: 58
    }
]

let passedStudents = students.filter(student => student.grade >= 60);
let NotPassedStudent = students.find(student => student.grade < 60);
console.log(passedStudents)
console.log(NotPassedStudent)

let expenses = [15, 34, 22, 49, 12, 78];
let total = expenses.reduce(function (x, y) {
    return x + y;
});

let words = ["banana", "apple", "cherry", "date"];
words.sort();

console.log(total)
console.log(words)


class Automobile {
    #contatoreChiamate = 0
    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca
        this.modello = modello
        this.anno = anno
        this.chilometraggio = 0
    }
    descrizione() {
        return `Quest'auto è un ${this.marca} ${this.modello} del ${this.anno}`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km
        }
        this.#incrementaContatore()
        console.log(this.#contatoreChiamate)
    }

    mostraChilometraggio() {
        return this.chilometraggio
    }

    #calcolaEtà() {
        const data = new Date();
        const annoCorrente = data.getFullYear();
        return annoCorrente - this.anno;
    }

    mostraEtà() {
        return this.#calcolaEtà();
    }

    _controllaChilometri() {
        if (this.chilometraggio > 100000) {
            return "Attenzione! L'auto supera i 100.000km"
        } return "Ok la macchina è entro il limite"
    }
    #incrementaContatore() {
        this.#contatoreChiamate += 1
    }

    static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
            return `L'auto con il chilometraggio maggiore è ${auto1.marca} ${auto1.modello} con ${auto1.chilometraggio}`
        } else if (auto2.chilometraggio > auto1.chilometraggio) {
            return `L'auto con il chilometraggio maggiore è ${auto2.marca} ${auto2.modello} con ${auto2.chilometraggio}`
        } else {
            return "Le auto hanno gli stessi km"
        }
    }

    mostraContatoreChiamate() {
        return this.#contatoreChiamate;
    }

    get chilometraggioAttuale() {
        return this.chilometraggio
    }

    set nuovoValoreChilometraggio(nuovoValore) {
        if (nuovoValore >= this.chilometraggio) {
            this.chilometraggio = nuovoValore
        }
    }

    static verificaIstanza(obj, classe) {
        if (obj instanceof classe) {
            return "obj è un'istanza della classe"
        } else {
            return "obj non è un'istanza della classe"
        }
    }
}
let car = new Automobile("Audi", "A1", 2019);
console.log(car.descrizione());

console.log(car.mostraChilometraggio());
car.aggiungiChilometri(100000);
car.aggiungiChilometri(200)
car.aggiungiChilometri(100);
console.log(car.mostraChilometraggio());
console.log(car.mostraEtà());
console.log(car.mostraContatoreChiamate())
console.log(car.chilometraggioAttuale)
car.nuovoValoreChilometraggio = 130000
console.log(car.chilometraggio);
console.log(Automobile.verificaIstanza(car, Automobile))

let auto1 = new Automobile("Alfa Romeo", "Mit0", 2014, 120000);
let auto2 = new Automobile("Fiat", "Panda", 2010, 120000);
console.log("confrontaChilometri: " + Automobile.confrontaChilometraggio(auto1, auto2))

class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    descrizione() {
        return `Quest'auto è una ${this.marca} ${this.modello} del ${this.anno} con un autonomia di ${this.autonomia}`;
    }

    ricarica(km) {
        this.autonomia += km;
    }

    avvisoChilometraggio() {
        const avviso = this._controllaChilometri();
        return avviso;
    }
}

let car2 = new Elettrica("Tesla", "Model S", "2022", 110000, 500);
car2.ricarica(100)
console.log(car2.descrizione() + "km")

Automobile.prototype.saluta = function () {
    return `Ciao ${this.marca} ${this.modello}`
}

console.log(car.saluta())
console.log(car2.saluta())
console.log(car2.avvisoChilometraggio());


class Camion extends Automobile {
    constructor(marca, modello, anno, chilometraggio, caricoMassimo) {
        super(marca, modello, anno, chilometraggio)
        this.caricoMassimo = caricoMassimo
        this.caricoAttuale = 0
    }

    descrizione() {
        return `Questo camion è un ${this.marca} ${this.modello} del ${this.anno} che può trasportare un massimo di ${this.caricoMassimo}`;
    }

    carica(kg) {
        if (this.caricoAttuale + kg > this.caricoMassimo) {
            return "Superi il carico massimo"
        } return this.caricoAttuale += kg
    }
}

let camion = new Camion("Mercedes-Benz", "Actros", 2014, 300000, 250000)
console.log(camion.descrizione());
console.log(camion.carica(250001))

let veicolo = new Automobile("Toyota", "Yaris", 2020, 60000);
let veicolo2 = new Camion("Iveco", "S-Way", 2018, 400000, 2500000);

console.log(veicolo instanceof Automobile)
console.log(veicolo2 instanceof Camion)

let numerix = [2, 5, 8, 4, 9]
let [primo, , terzo] = numerix
console.log(primo, terzo)

let ciao = [12, 31, 25, 46]
let [dodici, trentuno, venticinque, quarantasei, cinquanta = 50] = ciao
console.log(dodici, trentuno, venticinque, quarantasei, cinquanta)

let persona = {
    nome: "Davide",
    eta: "27",
    citta: "Napoli"
}

let { nome: nomePersona, eta: etaPersona, citta: cittaPersonaa } = persona
console.log(nomePersona, etaPersona, cittaPersonaa)

let macchina = {
    marca: "Audi",
    modello: "A1",
    anno: "2020",
}

let { marca, modello, anno, chilometraggio = 100000 } = macchina
console.log(marca, modello, anno, chilometraggio)

let num = [45, 32, 88, 27]
let num2 = [...num]
num.push(55)
console.log(num, num2)

let numb = [46, 78, 24, 91]
let numb2 = [54, 83, 37, 60]
let numbUnion = [...numb, ...numb2]
console.log(numbUnion)

let person1 = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 45
}

let person2 = { ...person1, mansione: "idraulico" }
console.log(person1, person2)

function sommaNumeri(...numeri) {
    let somma = 0
    for (let i of numeri) {
        somma += i;
    }
    return somma
}

console.log(sommaNumeri(1, 2, 3, 4, 5, 6, 7))

let numm = [23, 65, 34, 12, 78]
let [ventitre, sessantacinque, ...altriNumeri] = numm
console.log(ventitre, sessantacinque, altriNumeri)

let car1 = {
    carMarca: "Mercedes",
    carModello: "Classe A",
    anno: 2020,
    chilometri: 100000
}

let { carMarca, carModello, ...altreInfo } = car1
console.log(carMarca, carModello, altreInfo)

let obj = {
    nome: "Marco",
    anni: 19
}

console.log(JSON.stringify(obj))

let stringa = '{"nome":"Marco","anni":19}'
console.log(JSON.parse(stringa))

let ogg = [
    pers1 = {
        nome: "Luca",
        eta: 19,
    },
    pers2 = {
        nome: "Mario",
        eta: 20,
    },
    pers3 = {
        nome: "Davide",
        eta: 21,
    }
];

ogg = JSON.stringify(ogg)
let str = '[{"nome":"Luca","eta":19},{"nome":"Mario","eta":20},{"nome":"Davide","eta":21}]';
let j = JSON.parse(str)
pers4 = {
    nome: "Andrea",
    eta: 18,
};
j.push(pers4);
ogg = JSON.stringify(j)
console.log(ogg)

let nome = "Mario";
let cognome = "Rossi";
let nomeAndCognome = `${nome} ${cognome}`
console.log(nomeAndCognome)

let name = "Luca";
let surname = "Russo";
let age = 19;
let city = "Milano"
let info = `${name} ${surname} ${age} ${city}`
console.log(info)

function infoPersona(persona) {
    return `${persona.nome} ${persona.cognome} ${persona.eta} ${persona.citta}`;
}

let personax = {
    nome: "Davide",
    cognome: "Bianchi",
    eta: 20,
    citta: "Torino",
};

console.log(infoPersona(personax))

let numero = 20;
let stringax = "Ciao sono una stringa";
let arrayx = [10, 100, 1000]
let object = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 53,
};

console.log(numero)
console.log(stringax)
console.log(arrayx)
console.log(object)

let valore = 8;
if (valore < 10) {
    console.error(valore);
} else {
    console.warn(valore);
}

let arrayy = [
    macchina1 = {
        marca: "Alfa Romeo",
        modello: "Giulia",
        anno: 2020,
    },
    macchina2 = {
        marca: "Audi",
        modello: "RS3",
        anno: 2022,
    },
    macchina3 = {
        marca: "Porsche",
        modello: "GT3",
        anno: 2021,
    },
];

console.table(arrayy)
console.log("Ciao")
console.group("sono")
console.log("Marco")
console.groupEnd()

function messaggio() {
    console.log("Sono passati 3 secondi")
};

setTimeout(messaggio, 3000)

function messaggio2() {
    console.log("Sono passati 2 secondi")
};

//setInterval(messaggio2,2000)

function messaggio3() {
    console.log("È passato un secondo")
};

let intervallo = setInterval(messaggio3, 1000)

setTimeout(() => {
    clearInterval(intervallo)
}, 5000);

function divisione(a, b) {
    try {
        if (b == 0) {
            throw new Error ("La divisione per zero non è ammessa")
        }
        return a / b;
    } catch (err) {
        console.error(err.message)
    }
}

console.log(divisione(10,0));

function operazione(string) {
    try {
        if (typeof string != "string") {
            throw new Error ("Non è una stringa")
        }
        if (string.trim() == "") {
            throw new Error ("La stringa è vuota")
        }
        console.log(string)
    } catch (err) {
        console.error(err.message)
    } finally {
        console.log("Operazione finita")
    }
}

operazione(15)

function calcolaConCallback(valore1,valore2,callback) {
    callback(valore1 + valore2);
}

calcolaConCallback(20,10, function (risultato) {
    console.log(risultato)
})

function operazioneCallback(valore,callback) {
    const risultato = valore * 2;
    callback(risultato)
}

calcolaConCallback(20,10, function (risultato) {
    operazioneCallback(risultato, function (risultatoFinale) {
        console.log(risultatoFinale)
    })
})


function primaOperazione(num1,num2,callback) {
    const somma = num1 + num2;
    callback(somma)
}

function secondaOperazione(valore,callback) {
    let risultato = valore * 3;
    callback(risultato)
}

primaOperazione(20,10, function (risultato) {
    secondaOperazione(risultato, function (risFinale) {
        console.log(risFinale)
    })
})