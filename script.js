const cards = document.getElementById("cards")


let lastFr = null

let lastclick=null

function clickCard(e, name) {
    const card = document.getElementsByClassName("card")

    card[e].classList.add("active")
    if (lastFr) {
        if (lastFr == name) {
            card[lastclick].classList.add("win")
            card[e].classList.add("win")
            lastclick=null
            lastFr = null
        } else {
            setTimeout(() => {
                card[e].classList.remove("active")
                card[lastclick].classList.remove("active")
                lastclick=null
            lastFr = null
            }, 2000)
            
        }
    } else {
        lastFr = name
        lastclick = e
    }
}

console.log(card)