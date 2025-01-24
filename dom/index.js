function creaCookie(nome,valore,giorni) {
    let data = new Date();
    data.setTime(data.getTime() + (giorni * 24 * 60 * 60 * 100));
    const scadenza = "expires = " + data.toUTCString();
    const sameSite = "SameSite=None"; 
    const secure = "Secure"; 
    document.cookie = `${nome} = ${valore};${scadenza};path=/;${sameSite};${secure}`;
    console.log(`Cookie salvato: ${nome}=${valore}, scadenza: ${scadenza}`);
}

creaCookie("utente", "Marco", 10)

function recuperaCookie(nome) {
    const nomeEQ = nome + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nomeEQ) === 0) {
            console.log(`Cookie trovato: ${nome} = ${c.substring(nomeEQ.length)}`);
            return c.substring(nomeEQ.length);
        }                                   
    }
    console.log(`Cookie non trovato: ${nome}`)
    return null;
}

recuperaCookie("utente")

function rimuoviCookie(nome) {
    document.cookie = nome + "=; expires = Tue, 21 Jan 2025 00:00:00 UTC; path=/; SameSite=None; Secure";
    console.log(`Cookie rimosso: ${nome}`)
}

rimuoviCookie("utente")


function salvaLocalStorage(chiave, valore) {
    localStorage.setItem(chiave, valore);
    console.log(`Valore salvato nel localStorage: ${chiave} = ${valore}`);
}

function recuperaLocalStorage(chiave) {
    const valore = localStorage.getItem(chiave);
    if (valore !== null) {
        console.log(`Valore recuperato dal localStorage: ${chiave} = ${valore}`);
    } else {
        console.log(`Valore non trovato nel localStorage per la chiave: ${chiave}`);
    }
    return valore;
}

function rimuoviLocalStorage(chiave) {
    localStorage.removeItem(chiave);
    console.log(`Valore rimosso dal localStorage per la chiave: ${chiave}`);
}


salvaLocalStorage("utente", "Marco");  
recuperaLocalStorage("utente");        
rimuoviLocalStorage("utente");


function salvaSessionStorage(chiave, valore) {
    sessionStorage.setItem(chiave, valore);
    console.log(`Valore salvato nel sessionStorage: ${chiave} = ${valore}`);
}

function recuperaSessionStorage(chiave) {
    const valore = sessionStorage.getItem(chiave);
    if (valore !== null) {
        console.log(`Valore recuperato dal sessionStorage: ${chiave} = ${valore}`);
    } else {
        console.log(`Valore non trovato nel sessionStorage per la chiave: ${chiave}`);
    }
    return valore;
}

function rimuoviSessionStorage(chiave) {
    sessionStorage.removeItem(chiave);
    console.log(`Valore rimosso dal sessionStorage per la chiave: ${chiave}`);
}


salvaSessionStorage("utente", "Marco");  
recuperaSessionStorage("utente");        
rimuoviSessionStorage("utente");         


function salvaLocalStorage(chiave, valore) {
    localStorage.setItem(chiave, valore);
    console.log(`Valore salvato nel localStorage: ${chiave} = ${valore}`);
}

function salvaSessionStorage(chiave, valore) {
    sessionStorage.setItem(chiave, valore);
    console.log(`Valore salvato nel sessionStorage: ${chiave} = ${valore}`);
}

function recuperaLocalStorage(chiave) {
    const valore = localStorage.getItem(chiave);
    if (valore !== null) {
        console.log(`Valore recuperato dal localStorage: ${chiave} = ${valore}`);
    } else {
        console.log(`Valore non trovato nel localStorage per la chiave: ${chiave}`);
    }
    return valore;
}

function recuperaSessionStorage(chiave) {
    const valore = sessionStorage.getItem(chiave);
    if (valore !== null) {
        console.log(`Valore recuperato dal sessionStorage: ${chiave} = ${valore}`);
    } else {
        console.log(`Valore non trovato nel sessionStorage per la chiave: ${chiave}`);
    }
    return valore;
}

function rimuoviLocalStorage(chiave) {
    localStorage.removeItem(chiave);
    console.log(`Valore rimosso dal localStorage per la chiave: ${chiave}`);
}

function rimuoviSessionStorage(chiave) {
    sessionStorage.removeItem(chiave);
    console.log(`Valore rimosso dal sessionStorage per la chiave: ${chiave}`);
}

salvaLocalStorage("utente", "Marco");
salvaSessionStorage("sessioneUtente", "Andrea");
recuperaLocalStorage("utente");
recuperaSessionStorage("sessioneUtente");
rimuoviLocalStorage("utente");
rimuoviSessionStorage("sessioneUtente");


console.log(document)

let paragrafo = document.getElementById("paragrafo")
let div = document.querySelector(".container")

let p = document.getElementById("lorem")
p.innerText = "Ciao Lorem Ipsum"
p.style.backgroundColor = "blue"
p.style.fontSize = "20px"

p.innerHTML += "<button>cliccami</button>"
let ul = document.createElement("ul")
let li1 = document.createElement("li")
ul.appendChild(li1)
let li2 = document.createElement("li")
ul.appendChild(li2)
let li3 = document.createElement("li")
ul.appendChild(li3)
let li4 = document.createElement("li")
ul.appendChild(li4)
let li5 = document.createElement("li")
ul.appendChild(li5)

let submit = document.getElementById("submit")
let nome = document.getElementById("name")
let cognome = document.getElementById("surname")

submit.addEventListener("click", () => {
    if (nome.value == "" || cognome.value == "") {
        alert("Inserisci testo")
    } else {
        return
    }
})