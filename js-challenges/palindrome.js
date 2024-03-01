function palindrome(str) {
    let validateLetters = str.toLowerCase().split("");

    for (let i = 0; i < validateLetters.length - 1; i++) {
        console.log(`HERE IS SOME: ${validateLetters[validateLetters.length - i - 1]}`)
        if (validateLetters[i] !== validateLetters[validateLetters.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(`HERE IS SOME: ${palindrome("eye")}`)