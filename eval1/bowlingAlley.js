const score = (rolls) => {

    let totalScore = 0;
    let frames = [];

    if (!Array.isArray(rolls)) {
        throw new Error('Err! Rolls is not an arr');
    }

    if (rolls[rolls.length - 3] !== 10 && rolls.length > 20) {
        throw new Error('Err! Invalid number of rolls');
    }

    rolls.forEach((roll) => {
        if (!Number.isInteger(roll)) {
            throw new Error('Err! Rolls is not an arr of int');
        }
    });

    for (let i = 0; i <= 16; i += 2) {
        if (rolls[i] === 10 || rolls[i] + rolls[i + 1] == 10) {
            frames.push([rolls[i], rolls[i+1], rolls[i + 2]]);
        } 
        else if (rolls[i] + rolls[i + 1] < 10) {
            frames.push([rolls[i], rolls[i+1]]);
        }
    }
};


module.exports = { score };
