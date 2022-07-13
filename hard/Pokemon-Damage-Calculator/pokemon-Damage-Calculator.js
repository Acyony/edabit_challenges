/*
Pokemon Damage Calculator


It's a Pokemon battle! Your task is to calculate the damage that a particular move would do using the following formula (not the actual one from the game):

damage = 50 * (attack / defense) * effectiveness

attack = your attack power
defense = the opponent's defense
effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
Effectiveness:

    Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super effective against fire, but not very effective against grass.

Super effective: 2x damage
Neutral: 1x damage
Not very effective: 0.5x damage


To prevent this challenge from being tedious, you'll only be dealing with four types: fire, water, grass, and electric. Here is the effectiveness of each matchup:

fire > grass
fire < water
fire = electric
water < grass
water < electric
grass = electric
The function you must implement takes in:

your type
the opponent's type
your attack power
the opponent's defense
*/


function calculateDamage(yourType, opponentType, attack, defense) {
    let effectiveness = 1;

    if (yourType === "fire" && opponentType === "grass") effectiveness = 2;
    if (yourType === "fire" && opponentType === "water") effectiveness = 0.5;
    if (yourType === "grass" && opponentType === "fire") effectiveness = 0.5;
    if (yourType === "grass" && opponentType === "water") effectiveness = 2;
    if (yourType === "electric" && opponentType === "water") effectiveness = 2;
    if (yourType === "water" && opponentType === "fire") effectiveness = 2;
    if (yourType === "water" && opponentType === "grass") effectiveness = 0.5;

    return 50 * (attack / defense) * effectiveness;
}


console.log(calculateDamage("fire", "water", 100, 100)) // ➞ 25
console.log(calculateDamage("grass", "fire", 35, 5)) //  ➞ 175
console.log(calculateDamage("electric", "fire", 100, 100)) // ➞ 50
