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