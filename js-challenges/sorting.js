function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function excludePrime(numbers) {

    numbers = numbers.filter(num => !checkPrime(num));
    let number = numbers.sort(function (a, b) {
        return b - a
    });
    return number;
}


console.log(excludePrime([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));