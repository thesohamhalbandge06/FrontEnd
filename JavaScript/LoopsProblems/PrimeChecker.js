function isPrime(num) {
    let flag = true;
    for(let i = 2; i < num; i++) {
        if(num % i == 0) { 
            flag = false;
            break;
        }  
    } 
    return flag;
}

console.log(isPrime(10));
console.log(isPrime(9));
console.log(isPrime(11));