function showMessage(message: string): void {
    console.log(message);
}
export {showMessage}

type CallbackType = (number1: number, number2: number) => number
function calc(num1: number, num2: number, callback: CallbackType): void {
    return console.log('Result', callback(num1, num2));
}
export {calc}

function customError(message: string): never {
    throw new Error(message);
}
export {customError}