class Calculator {
    static sum(x, y) {
        return x + y;
    }

    sum2(x, y) {
        return x + y;
    }

    static multiply(x, y) {
        return x * y;
    }
}


const calculatorObject = new Calculator();

console.log(Calculator.sum(5, 3));
console.log(calculatorObject.sum2(7, 9));
console.log(Calculator.multiply(10, 30));