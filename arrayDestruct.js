const fruits = ['apple', 'orange', 'banana', 'peace'];
const friends = ['john', 'peter', 'susan', 'anna', 'bob', 'kelly'];
const numbers = [111, 222, 333, 444, 555, 666];
const orange = fruits[1];
const apple = fruits[0];
const banana = fruits[2];
console.log(orange, apple, banana);

const [, peter, susan, , , kelly] = numbers; 
console.log(peter, kelly);