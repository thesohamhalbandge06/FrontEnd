function minimumOfThree(num1, num2, num3) {
    if(num1 <= num2 && num1 <= num3) return num1;
    else if(num2 <= num1 && num2 <= num3) return num2;
    else return num3;
}

console.log(minimumOfThree(10, 20, 30));
console.log(minimumOfThree(10, 5, 20));
console.log(minimumOfThree(5, 10, 0));
console.log(minimumOfThree(10, 10, 15));