// DOM ELEMENTS
// Form
const formDom = document.getElementById("form")

// Fields
const fullNameFormDom = document.getElementById("fullName")
const distanceDom = document.getElementById("distance")
const ageDom = document.getElementById("age")

// Ticket
const ticketDom = document.getElementById("ticket")
const fullNameTicketDom = document.getElementById("fullNameTicket")
let carriageDom = document.getElementById("carriage")
let cpCodeDom = document.getElementById("cpCode")

// Function
function getRandomNumber(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random
}

// DOM EVENTS
formDom.addEventListener("submit", function(event) {
    event.preventDefault()
    ticketDom.classList.remove("hidden")
    fullNameTicketDom.innerHTML = fullNameFormDom.value
    const ticketFullPrice = Number(distanceDom.value) * 0.21
    let finalPrice = ticketFullPrice
    let promo 
    
    if (ageDom.value === "minorenne") {
        promo = "Promo under 18 (-20%)"
        finalPrice = Math.ceil(ticketFullPrice * 0.8)
    } else if (ageDom.value === "over_65") {
        promo = "Promo over (-40%)"
        finalPrice = Math.ceil(ticketFullPrice * 0.6)
    } else {
        promo = "Biglietto standard"
    }
    promoTicket.innerHTML = promo
    price.innerHTML = `${Number(finalPrice)}€`
    
    let carriage = getRandomNumber(1, 10)
    carriageDom.innerHTML = carriage

    let cpCOde = getRandomNumber(10000, 99999)
    cpCodeDom.innerHTML = cpCOde
    
})