/* const h1 = document.getElementsByTagName("h1")[0] */

/* const state = {
  text: ""
} */

/* setInterval(() => {
  state.text += "ciao"
  render()
}, 500) */

/* function render() {
  h1.textContent = state.text
} */

// statefull / stateless

// create an app that let the user cook the pasta

const btnStartTimer = document.getElementById("start-timer");
const timerDisplay = document.getElementById("timer-display")
const pasta = document.getElementById("pasta")
const pot = document.getElementById("pot")
const caption = document.getElementById("caption")
const caption2 = document.getElementById("caption2")

const state = {
    timer: 60,
    isPastaReady: false,
    isPastaCooking: false
};

btnStartTimer.addEventListener("click", () => {
     setInterval(() => {
        if (state.timer > 0) {
            state.timer -= 1
            render()
        }
    }, 1000);

    state.isPastaCooking = true
    render()

    state.isPastaReady = true
    render()
});

function render() {
    if (state.isPastaCooking) {
        timerDisplay.style.display = "block"
        timerDisplay.innerHTML = state.timer
        caption.style.display = "block"
    }
    if (state.timer === 0) {
        pot.remove()
        pasta.style.display = "block"      
        clearInterval()
        caption2.style.display = "block"
        caption.style.display = "none"
    }
}