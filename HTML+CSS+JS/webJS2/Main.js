function sumOfNum(num) {
    const str = num.toString();
    let sum = 0;
    for (let char of str) {
        sum += parseInt(char, 10);
    }
    return sum;
}

function combineOfSym(sym1, sym2, sym3) {
    return sym1 + sym2 + sym3;
}

function cityInformation(name, population, area) {
    return `Town ${name} has population of ${population} and area ${area} square km.`;
}

function calculator(num1, operator, num2) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            throw new Error(`Unsupported operator: ${operator}`);
    }
    return result.toFixed(2);
}

function binaryToDec(binaryStr) {
    if (!/^[01]{8}$/.test(binaryStr)) {
        return "Error: The input string must be an 8-bit binary number.";
    }

    return parseInt(binaryStr, 2);
}

console.log(sumOfNum(245678));
console.log(sumOfNum(97561));
console.log(sumOfNum(543));

console.log(combineOfSym('a', 'b', 'c'));
console.log(combineOfSym('%', '2', 'o'));
console.log(combineOfSym('1', '5', 'p'));

console.log(cityInformation('Moscow', 12636312, 2561));

console.log(calculator(5, '+', 10));
console.log(calculator(25.5, '-', 3));
console.log(calculator(10, '*', 2));
console.log(calculator(10, '/', 2));

console.log(binaryToDec('00001001'));
console.log(binaryToDec('11110000'));
console.log(binaryToDec('10101010'));