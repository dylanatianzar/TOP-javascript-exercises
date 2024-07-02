const sumAll = function(firstNum, secondNum) {
    if ((firstNum < 0 || secondNum < 0) || (!Number.isInteger(firstNum) || !Number.isInteger(secondNum))) {
        return "ERROR";
    }
    let total = 0;
    let first = firstNum, second = secondNum;

    if (firstNum > secondNum) {
        first = secondNum;
        second = firstNum;
    }

    for (let i = first; i <= second; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
