
function gameToDaimond(gameQunatityForFriend1, gameQunatityForFriend2, gameQunatityForFriend3) {
    const parGameDaimondForFriend1 = 21;
    const parGameDaimondForFriend2 = 32;
    const parGameDaimondForFriend3 = 43;
    const totalDaimondForFriend1 = parGameDaimondForFriend1 * gameQunatityForFriend1;
    const totalDaimondForFriend2 = parGameDaimondForFriend2 * gameQunatityForFriend2;
    const totalDaimondForFriend3 = parGameDaimondForFriend3 * gameQunatityForFriend3;
    const totalDaimondOfAllFriends = totalDaimondForFriend1 + totalDaimondForFriend2 + totalDaimondForFriend3;
    if (totalDaimondOfAllFriends > 1000 * 2) {
        const moreThan2000 = totalDaimondOfAllFriends - 2000;
        return { moreThan2000 };
    }
    return ['less than 2000:', totalDaimondOfAllFriends];

}

const gameOfFriend1 = 2;
const gameOfFriend2 = 20;
const gameOfFriend3 = 18;
const totalDaimonds = gameToDaimond(gameOfFriend1, gameOfFriend2, gameOfFriend3);
console.log(totalDaimonds);







