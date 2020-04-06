class Calculator {
  // Properties:
  form: HTMLElement = document.querySelector("#calculator");
  num1: HTMLInputElement = document.querySelector('[name="num1"]');
  num2: HTMLInputElement = document.querySelector('[name="num2"]');
  result: HTMLElement = document.querySelector("#calculator strong");
  // Methods:
  add(num1: number, num2: number): number {
    return num1 + num2;
  }
  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }
  divide(num1: number, num2: number): number {
    return num1 / num2;
  }
  remainder(num1: number, num2: number): number {
    return num1 % num2;
  }
}
