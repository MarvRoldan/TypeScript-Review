var Calculator = /** @class */ (function () {
    function Calculator() {
        // Properties:
        this.form = document.querySelector("#calculator");
        this.num1 = document.querySelector('[name="num1"]');
        this.num2 = document.querySelector('[name="num2"]');
        this.result = document.querySelector("#calculator strong");
    }
    // Methods:
    Calculator.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.subtract = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.prototype.multiply = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.prototype.divide = function (num1, num2) {
        return num1 / num2;
    };
    Calculator.prototype.remainder = function (num1, num2) {
        return num1 % num2;
    };
    return Calculator;
}());
