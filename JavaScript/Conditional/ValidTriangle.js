function isValidTriangle(side1, side2, side3) {
    if(side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 >= side3) return "Valid";
    else return "Invalid";
}

console.log(isValidTriangle(10, 20, 15));
console.log(isValidTriangle(1, 10, 12));