/*
Tower of Hanoi
There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.
Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.
*/

function towerHanoi(discs) {
    return Math.pow(2, discs) - 1;
}


console.log(towerHanoi(3)) // 7
console.log(towerHanoi(5)) // 31
console.log(towerHanoi(0)) // 0
console.log(towerHanoi(19)) // 524287