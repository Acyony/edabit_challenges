/*House of Cards

The image below shows a sequence of larger and larger houses of cards, with the total number of cards included for each:
Given the tower height n, return the number of cards needed to construct a full house of cards.
*/

function cardsNeeded(n) {
    return n * (3 * n + 1) / 2
}


console.log(cardsNeeded(2)) //7
console.log(cardsNeeded(3)) //15
console.log(cardsNeeded(4)) //26
console.log(cardsNeeded(0)) //0
console.log(cardsNeeded(8)) //100
console.log(cardsNeeded(7)) //77
