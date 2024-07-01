function sumOfNaturalNumbers(num) {
    let i = 1;
    let sum = 0;
    while(i <= num) {
        sum += i;
        i++;
    }
    return sum;
}

console.log(sumOfNaturalNumbers(5));
console.log(sumOfNaturalNumbers(10));
console.log(sumOfNaturalNumbers(15));
console.log(sumOfNaturalNumbers(20));
console.log(sumOfNaturalNumbers(25));