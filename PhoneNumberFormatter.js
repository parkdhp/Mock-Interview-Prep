function PhoneNumberFormatter(numbers) {
    this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function () {
    var string = '';
    string += `${this.parenthesize(this.getAreaCode())} `;
    string += `${this.getExchangeCode()} `;
    string += `- ${this.getLineNumber()}`;
    return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function () {
    return this.slice(0, 3);
};


PhoneNumberFormatter.prototype.getExchangeCode = function () {
    return this.slice(3, 6)
};

PhoneNumberFormatter.prototype.getLineNumber = function () {
    return this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function (string) {
    return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function (start, end) {
    return this.numbers.slice(start, end).join('');
};

let pn = new PhoneNumberFormatter([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(pn.render());

function assertEquals(actual, expected, testName) {
    if (actual === expected) {
        console.log(`passed`);
    } else {
        console.log(`FAILED ${testName} expected ${expected} but got ${actual}`);
    }
}

assertEquals(pn.render(), `(123) 456 - 7890`, `should return formatted pn`);
