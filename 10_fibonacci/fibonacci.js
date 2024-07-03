const fibonacci = function(num) {
    if (num == 0) {
        return 0;
    }
    if (num == 1 || num == 2) {
        return 1;
    }
    let prev = 1;
    let next = 1;
    let temp;
    for (let i = 2; i <= num; i++){
        prev += next;
        temp = next;
        next = prev;
        prev = temp;
    }

    return (num > 2) ? prev : "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
