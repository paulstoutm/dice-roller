let userRoll = document.querySelector("#Total")
let rollButton = document.querySelector("#Roll")
let dieRolls = []
let input = document.querySelector("#user-input")
let totalElement = document.querySelector("#Total")
let showAllRollsButton = document.querySelector("#Show-All-Rolls")
let allRollsElement = document.querySelector("#All-Rolls")


rollButton.addEventListener("click", function () {

    let userInput = input.value
    let rollTotal = 0
    for (let counter = 0; counter < userInput; counter += 1) {
        let numberRolled = Math.floor(Math.random() * 6) + 1;
        dieRolls.push(numberRolled)
        rollTotal += numberRolled

    }
    totalElement.innerHTML = rollTotal
})
showAllRollsButton.addEventListener("click", function () {

    for (let counter = 0; counter < dieRolls.length; counter += 1) {
        let currentDieRoll = dieRolls[counter]
        let listItemString = '<li "#All-Rolls">' + currentDieRoll + "</li>";

        allRollsElement.innerHTML += listItemString;

        console.log(dieRolls[counter])
    }


})


