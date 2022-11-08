const sayHi = () => {
    console.log('hello world');
}
sayHi();

const double = value => {
    return value * 2;
}

const num = double(4);
console.log(num);

const multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
}
console.log(multiply(4,6));

const object = () => ({
    name : 'john',
    city: 'Bangkok'
});
const person = object();
console.log(person);

const numbers = [111,222,333,444,555];