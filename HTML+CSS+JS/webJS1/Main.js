function determineAgeGroup(age) {
    if (age >= 0 && age <= 2) return "младенец";
    else if (age >= 3 && age <= 13) return "ребенок";
    else if (age >= 14 && age <= 19) return "подросток";
    else if (age >= 20 && age <= 65) return "взрослый";
    else if (age >= 66) return "пожилой";
    else return "Неверный возраст";
}

function roundNumber(num, precision) {
    if (precision > 15) precision = 15;
    let factor = Math.pow(10, precision);
    let rounded = Math.round(num * factor) / factor;
    return parseFloat(rounded.toFixed(precision));
}

function findLargestDivisor(num) {
    const divisors = [10, 6, 7, 3, 2];
    for (let divisor of divisors) {
        if (num % divisor === 0) {
            return `Число делится на ${divisor}`;
        }
    }
    return "Не делится";
}

function calculateVacationCost(groupSize, groupType, dayOfWeek) {
    const prices = {
        Students: { Friday: 8.45, Saturday: 9.80, Sunday: 10.46 },
        Corporate: { Friday: 10.90, Saturday: 15.60, Sunday: 16 },
        Regular: { Friday: 15, Saturday: 20, Sunday: 22.50 }
    };

    let pricePerPerson = prices[groupType][dayOfWeek];
    let totalPrice = groupSize * pricePerPerson;

    if (groupType === "Students" && groupSize >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === "Corporate" && groupSize >= 100) {
        totalPrice -= 10 * pricePerPerson;
    } else if (groupType === "Regular" && groupSize >= 10 && groupSize <= 20) {
        totalPrice *= 0.95;
    }

    return `Общая цена: ${totalPrice.toFixed(2)}`;
}

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "yes";
    } else {
        return "no";
    }
}

// Тесты
console.log(determineAgeGroup(1));
console.log(determineAgeGroup(10));
console.log(determineAgeGroup(17));
console.log(determineAgeGroup(30));
console.log(determineAgeGroup(60));
console.log(determineAgeGroup(100));

console.log(roundNumber(3.1415926535897932384, 2));
console.log(roundNumber(10.5, 3));

console.log(findLargestDivisor(30));
console.log(findLargestDivisor(15));
console.log(findLargestDivisor(12));
console.log(findLargestDivisor(1643));

console.log(calculateVacationCost(30, "Students", "Sunday"));
console.log(calculateVacationCost(40, "Regular", "Saturday"));

console.log(isLeapYear(1984));
console.log(isLeapYear(2003));
console.log(isLeapYear(4));