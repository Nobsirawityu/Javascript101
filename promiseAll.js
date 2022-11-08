
function promiseData(listOfNumber){
    Promise.all(listOfNumber).then((listOfAnswer) => {
        console.log(listOfAnswer);
    });
}

function buffer(number){
    return new Promise((resolve, reject) => {
        number = number + 5;
        resolve(number);
    });
}

const listOfNumber = [buffer(6), buffer(7), buffer(8)];
promiseData(listOfNumber);