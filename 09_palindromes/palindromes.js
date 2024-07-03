const palindromes = function (str) {
    let formatted = "";

    for (let i = 0; i < str.length; i++) {
        if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z") || (str[i] >= "0" && str[i] <= "9")) {
            formatted += str[i];
        } 
    }
    formatted = formatted.toLowerCase();
    let mid = Math.floor(formatted.length/2);
    for (let i = 0; i < mid; i++) {
        if (formatted[i] != formatted[formatted.length-1-i]) {
            return false;
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
