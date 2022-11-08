function sum(i , j){
    return i+j;
}

function randomDelayed(max = 10, expected = 5, delay=100){
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * max);
        setTimeout(() => {
            number > expected ? resolve(number) : reject(`Error this ${number} is less than ${expected}`);
        }, delay)
    })
}

randomDelayed(100, 75, 2500).then(number => {
    console.log(number);
}).catch((error) => {
    console.log(error);
})

console.log(sum(5,4));