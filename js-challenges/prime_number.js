function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimes(numbers) {
    const primeNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            primeNumbers.push(numbers[i]);
        }
    }

    return primeNumbers;
}

const resultArray = filterPrimes([3, 5, 2, 5, 16, 33, 2, 4, 6, -10, 4]);

console.log(resultArray);